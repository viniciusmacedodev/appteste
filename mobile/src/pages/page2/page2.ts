import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page1Page } from '../page1/page1';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  user: any = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user.name = "Fulano"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  openPage(user) {
    this.user.name = user.name;
    console.log(user);
    this.navCtrl.setRoot(Page1Page , {
      name: user.name
    });
  }

  closePage() {
    this.navCtrl.setRoot(Page1Page );
  }

}
