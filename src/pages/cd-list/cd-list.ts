import { Component } from '@angular/core';
import {MenuController, ModalController} from 'ionic-angular';
import {Books_cdService} from "../../services/books_cd.service";

import {CdModel} from "../../models/cd.model";
import {LendCdPage} from "../lend-cd/lend-cd";

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: CdModel[];

  constructor(public bookCdService: Books_cdService,
              public modalCtrl: ModalController,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.cdList = this.bookCdService.cd.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
