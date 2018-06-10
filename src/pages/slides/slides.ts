import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class SlidesPage {

  constructor(public navCtrl: NavController) {
  }

  btnClicked(){
    this.navCtrl.push(LoginPage);

  }

}
