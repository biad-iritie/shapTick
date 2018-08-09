import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
//PAGE
import { HomePage } from '../pages/home/home';
import { EventPage } from '../pages/event/event';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderPageComponent } from '../components/header-page/header-page';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { PayPage } from '../pages/pay/pay';
import { PayStatusPage } from '../pages/pay-status/pay-status';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventPage,
    EventDetailPage,
    PayPage,
    PayStatusPage,
    HeaderPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventPage,
    EventDetailPage,
    PayPage,
    PayStatusPage,
    HeaderPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
