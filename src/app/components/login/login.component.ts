import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router :Router

  constructor(private gameService : GameService, router : Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  dologin(name,pass, formulario : HTMLDivElement){
    this.gameService.login(name, pass).subscribe(x =>{
      if(x['code'] == 200){
        localStorage.setItem("id", x['data'])
        localStorage.setItem("logged", "true") 
        console.log(x['data'])
        this.router.navigate(['/home'])
      }else{
        
        console.log("Wrong Username or Password!")
        localStorage.setItem("logged", "false")
      }
    })
  }

}
