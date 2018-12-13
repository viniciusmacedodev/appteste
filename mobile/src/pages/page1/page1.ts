import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page2Page } from '../page2/page2';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  user: any = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
      this.user.name = navParams.get('name') || "Fulano";
      console.log(this.user);
  }

  openPage() {
    this.navCtrl.setRoot(Page2Page);
  }

}
