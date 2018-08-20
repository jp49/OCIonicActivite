import {Component, OnInit} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import {BookModel} from "../../models/book.model";
import {Books_cdService} from "../../services/books_cd.service";

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit{

  book: BookModel;

  constructor(public viewCtrl: ViewController,
              public navParams: NavParams,
              public bookcdService: Books_cdService) {
  }

  ngOnInit() {
    const index = this.navParams.get('index');
    this.book = this.bookcdService.book[index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onChangeStatus(book: BookModel) {
    this.bookcdService.changeStatusBook(book);
  }
}
