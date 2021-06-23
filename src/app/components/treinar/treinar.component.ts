import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-treinar',
  templateUrl: './treinar.component.html',
  styleUrls: ['./treinar.component.css']
})
export class TreinarComponent implements OnInit {

  service : GameService;
  router : Router;
  constructor(private GameService : GameService, router : Router) { 
    this.service = GameService
    this.router = router;
  }

  ngOnInit(): void {
  }

  @ViewChild('train') train : any;

  hasOneDayPassed() {
    var date = new Date().toLocaleDateString();

    if (localStorage.yourapp_date == date) {
      return false;
    }

    localStorage.yourapp_date = date;
    return true;
  }

  treinar(){
    if(!this.hasOneDayPassed()){
      let atk = +this.service.personagem.atk +5;
      let int = +this.service.personagem.int +5;
      let hp = +this.service.personagem.hp +5;
      let id = this.service.personagem.id;
      this.service.updateStats(atk, int, hp, id).subscribe((x) => {
        console.log(x['data']);
        console.log(this.GameService.personagem.atk)
        console.log(this.GameService.personagem.vida)
        console.log(this.GameService.personagem.vida)
      });
    }else{
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    }
  }

}
