import {BookModel} from "../models/book.model";
import {CdModel} from "../models/cd.model";

export class Books_cdService {
  book: BookModel[] = [
    {
      title: 'Hulk',
      isLend: true,
      nbPages: 15
    },
    {
      title: 'Spiderman',
      isLend: false,
      nbPages: 25
    },
    {
      title: 'Batman',
      isLend: true,
      nbPages: 12
    }
  ];

  cd: CdModel[] = [
    {
      title: 'Fenfo Digipack',
      isLend: true,
      author: 'Fatoumata Diawara'
    },
    {
      title: 'The Blues Is Alive And Well',
      isLend: false,
      author: 'Buddy Guy'
    },
    {
      title: 'Cantatas For Soprano And Bass',
      isLend: true,
      author: 'Jean-Sébastien Bach'
    }
  ];

  changeStatusBook(obj: BookModel) {
    const bookChange = obj;
    this.book[this.book.indexOf(bookChange)].isLend = !this.book[this.book.indexOf(bookChange)].isLend;
  }

  changeStatusCd(obj: CdModel) {
    const cdChange = obj;
    this.cd[this.cd.indexOf(cdChange)].isLend = !this.cd[this.cd.indexOf(cdChange)].isLend;
  }
}
