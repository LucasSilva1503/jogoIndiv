import { Injectable } from '@angular/core';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  personagem: any = {
    name: "",
    id: "161",
    atk: "",
    isMonset: "false",
    int: "",
    hp: "",
    idPlayer: "88",
  };

  adversario: any = {
    name: "",
    id: "",
    atk: "",
    isMonset: "false",
    int: "",
    hp: "",
    idPlayer: "",
  };




  linkLogin: string = "http://moreiramoises.pt/server/apis/login.php";
  linkCreateChar: string = 'http://moreiramoises.pt/server/apis/createChart.php';
  linkAdvId: string = 'http://moreiramoises.pt/server/apis/get/getChar.php?PlayerID=';
  linkRndAdv: string = 'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';
  linkUpdateChar: string = 'http://moreiramoises.pt/server/apis/updateChart.php';


  login(name,pass){
    let bodyData: FormData = new FormData();
    bodyData.append("username", name);
    bodyData.append("password", pass);
    return this.http.post(this.linkLogin, bodyData);
  }

  criarChar(nome, atk, int, vida, utilizador, password){
    let bodyData: FormData = new FormData();
    bodyData.append('name', nome.toString());
    bodyData.append('atk', atk.toString());
    bodyData.append('isMonster', 'false');
    bodyData.append('int', int.toString());
    bodyData.append('vida', vida.toString());
    bodyData.append('username', utilizador);
    bodyData.append('password', password);
    return this.http.post(this.linkCreateChar, bodyData);
  }

  getCharID(id) {
    return this.http.get(this.linkAdvId + id);
  }

  getRndChar() {
    return this.http.get(this.linkRndAdv);
  }


  updateStats(atk, int, hp, id) {
    let bodyData: FormData = new FormData();
      bodyData.append('idChar', id.toString());
      bodyData.append('name', this.personagem.name);
      bodyData.append('atk', atk.toString());
      bodyData.append('isMonster', 'false');
      bodyData.append('int', int.toString());
      bodyData.append('vida', hp.toString());
      bodyData.append('username', "Lucas");
      bodyData.append('password', "omeunome");
    
    return this.http.post(this.linkUpdateChar, bodyData);
  }

}
