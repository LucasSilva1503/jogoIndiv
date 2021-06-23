import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lutar',
  templateUrl: './lutar.component.html',
  styleUrls: ['./lutar.component.css']
})
export class LutarComponent implements OnInit {

  service : GameService;
  router : Router;
  constructor(private GameService : GameService, router : Router) {
    this.service = GameService
    this.router = router;
   }

  ngOnInit(): void {
    this.getchar();
    this.getRndPlayer();
  }

  @ViewChild('startFight') startFight : any;

  start(){
    this.startFight.nativeElement.style.display = "none";
    if(this.playeratk){
      this.ataquePersonagem();
    }else{
      this.ataqueAdversario(); 
    }
    console.log(this.GameService.personagem.name)
    console.log(this.GameService.personagem.atk)
    console.log(this.GameService.personagem.vida)
    console.log(this.GameService.adversario.name)
    console.log(this.GameService.adversario.atk)
    console.log(this.GameService.adversario.vida)
  }

  getchar(){
    this.GameService.getCharID(88).subscribe((x) => {
      if (x['code'] == 200) {
        this.GameService.personagem.name = x['data'].Personagens[0].Nome;
        this.GameService.personagem.id = x['data'].Personagens[0].ID;
        this.GameService.personagem.atk = x['data'].Personagens[0].Atk;
        this.GameService.personagem.isMonset = x['data'].Personagens[0].IsMonset;
        this.GameService.personagem.crit = x['data'].Personagens[0].Int;
        this.GameService.personagem.hp = x['data'].Personagens[0].Vida;
        this.GameService.personagem.idPlayer = x['data'].Personagens[0].ID_Player;
      }
    });
}

  playeratk : boolean = false;
  vidabase : number;
  op: boolean = false;

  getRndPlayer() {
    this.vidabase = this.service.personagem.hp;
    this.service.getRndChar().subscribe((x) => {
      if (x['code'] == 200) {
        this.service.adversario.name = x['data'].Nome;
        this.service.adversario.id = x['data'].ID;
        this.service.adversario.atk = x['data'].Atk;
        this.service.adversario.isMonset = x['data'].IsMonset;
        this.service.adversario.int = x['data'].Int;
        this.service.adversario.hp = x['data'].Vida;
        this.service.adversario.idPlayer = x['data'].ID_Player;
        console.log("Adversario:", this.service.adversario.name);
      }
    });
  }


  ataquePersonagem(){
    this.service.adversario.hp -= this.service.personagem.atk;
    //this.vidaplayer.nativeElement.style.transform = "translate(" + (-(this.service.charescolhido.hp - this.service.adversario.atk) * 100 / this.service.charescolhido.hp) + "%";
    this.verVida();
  }

  ataqueAdversario(){
      this.service.personagem.hp -= this.service.adversario.atk;
      //this.vidainimigo.nativeElement.style.width = "translate(" + ((this.service.adversario.hp - this.service.charescolhido.atk) * 100 / this.service.adversario.hp) + "%";
      this.verVida();
  }

  verVida(){
    if(this.service.personagem.hp <= 0){
      this.ringTheBell(0);
    }
    else if(this.service.adversario.hp <= 0){
      this.ringTheBell(1);
    }
    else if(this.service.personagem.hp > 0 && this.service.adversario.hp > 0){
      if(this.playeratk){
        this.playeratk = false;
      }else{
        this.playeratk = true;
      }
      setTimeout(() => {
        this.start();    
      }, 2000);
    }
  }

  ringTheBell(lost : any){
    
    if(lost == 1){
      console.log("winner");
      alert("Winner");
    }else{
      console.log("loser");
      alert("Loser");
    }
    setTimeout(() => {
      this.service.personagem.hp = this.vidabase;
      this.router.navigate(['/home']);
    }, 3000);
  }






}
