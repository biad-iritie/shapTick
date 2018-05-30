import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventPage } from '../event/event';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  params: any = {
    title: "Home"
   
  } 
  constructor(public navCtrl: NavController) {
    console.log('home');
    
  }


  event(){
    console.log();
    
    this.navCtrl.push(EventPage,{
      id:1
    })
  }

}
