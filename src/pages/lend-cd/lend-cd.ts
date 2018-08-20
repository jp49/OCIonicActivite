import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {Books_cdService} from "../../services/books_cd.service";
import {CdModel} from "../../models/cd.model";

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  cd: CdModel;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams,
              public bookcdService: Books_cdService) {
  }

  ngOnInit() {
    const index = this.navParams.get('index');
    this.cd = this.bookcdService.cd[index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onChangeStatus(cd: CdModel) {
    this.bookcdService.changeStatusCd(cd);
  }
}
