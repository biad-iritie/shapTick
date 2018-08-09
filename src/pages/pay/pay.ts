import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import { PayStatusPage } from '../pay-status/pay-status';

/**
 * Generated class for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {
  params: any = {
    title: "Achat"
   
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  buy(){
    this.navCtrl.push(PayStatusPage,{})
  }
  test(){
    console.log("test");
    this.navCtrl.push(PayStatusPage,{})
  }

}
