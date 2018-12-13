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
      let isEmpty = true;

      this.user.name = "Fulano";

      for (var i in navParams.get('name')) {
        if(navParams.get('name').hasOwnProperty(i)) {
          isEmpty = false;
          break;
        }
      }

      if(isEmpty) {
        this.user.name = "";
      }
      else {
        this.user.name = navParams.get('name');
      }
      // console.log(Object.keys(this.user.name).length);
      //
      // if (navParams.get('name').length == 0){
      //   this.user.name = "";
      // }
      // else{
      //   this.user.name = navParams.get('name');
      // }
      // this.user.name = navParams.get('name') || "Fulano";
      // console.log(this.user);
  }

  openPage(user) {
    this.navCtrl.setRoot(Page2Page, {
      name: user.name
    });
  }

}
