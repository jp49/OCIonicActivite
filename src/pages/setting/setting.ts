import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtrl: MenuController) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
