import { Component, OnInit } from '@angular/core';
//importamos SplashComponente 
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor( private modalController: ModalController) { }

  ngOnInit() {}

  //creamos metodo
  ionViewDidEnter() {
    setTimeout(() => {
      this.modalController.dismiss();

    },5000);
  }

}
