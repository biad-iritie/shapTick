import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { EventDetailPage } from '../event-detail/event-detail';
import { PayPage } from '../pay/pay';
/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  params: any = {
    title: "Evènement"
   
  }

  //exemple
  nbre1:number=0;
  nbre2:number=0;
  total:number=0;
  p_normal=500;
  p_vip=1000;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  moins(value){
    
    value = value>0 ? value-- : 0 ;
  }

  plus(value){
    
    value = value<5 ? value++ : 5 ;
  }

  detailEvent(){
    let modal = this.modalCtrl.create(EventDetailPage);
    modal.present();
  }

  giveTotal(){
    this.total= (this.p_normal * this.nbre1) + (this.p_vip * this.nbre2)
  }

  pay(){
    this.navCtrl.push(PayPage,{
      id:1
    });
  }

}
