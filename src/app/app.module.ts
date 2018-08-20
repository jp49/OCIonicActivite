import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookListPage} from "../pages/book-list/book-list";
import {Books_cdService} from "../services/books_cd.service";
import {CdListPage} from "../pages/cd-list/cd-list";
import {LendBookPage} from "../pages/lend-book/lend-book";
import {LendCdPage} from "../pages/lend-cd/lend-cd";
import {SettingPage} from "../pages/setting/setting";
import {TabsPage} from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    CdListPage,
    LendBookPage,
    LendCdPage,
    SettingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Books_cdService
  ]
})
export class AppModule {}
