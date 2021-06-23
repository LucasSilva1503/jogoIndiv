import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  service : GameService
  constructor(private GameService: GameService, private router: Router) {
    this.service = GameService;
   }

  ngOnInit(): void {
  }

  criar(name, atk, int, vida){
    this.GameService .criarChar(name, atk, int, vida, "Lucas", "omeunome").subscribe((x) =>{
      console.log(x['data']);
    });
  }
  

}
