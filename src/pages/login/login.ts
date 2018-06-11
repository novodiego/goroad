import { HomePage } from './../home/home';
import { CriarContaPage } from './../criar-conta/criar-conta';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  btnEntrar(){
    this.navCtrl.push(HomePage);
  }

  btnCriarConta(){
    this.navCtrl.push(CriarContaPage);
  }
  
}