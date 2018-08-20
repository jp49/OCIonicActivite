import { Component } from '@angular/core';
import {MenuController, ModalController} from 'ionic-angular';
import {BookModel} from "../../models/book.model";
import {LendBookPage} from "../lend-book/lend-book";
import {Books_cdService} from "../../services/books_cd.service";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList: BookModel[];

  constructor(public bookCdService: Books_cdService,
              public modalCtrl: ModalController,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.bookList = this.bookCdService.book.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
