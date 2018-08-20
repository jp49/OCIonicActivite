export class CdModel {
  constructor(public title: string,
              public isLend: boolean,
              public author: string) {
    this.isLend = false;
  }
}
