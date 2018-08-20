export class BookModel {
  constructor(public title: string,
              public isLend: boolean,
              public nbPages: number) {
    this.isLend = false;
  }
}
