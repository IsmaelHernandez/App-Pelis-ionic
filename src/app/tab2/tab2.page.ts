import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  peliculas: Pelicula[] = [];
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos','La vida es Bella'];
  buscando = false;
  


  constructor( private moviesService: MoviesService, private modalCtrl: ModalController) {}

  //Metodo buscar de tab2-buscar
  buscar( event ) {

    const valor: string = event.detail.value;

    if( valor.length === 0){
      this.buscando = false; //cancelamos el spinner
      this.peliculas = [];
      return;
    }

    this.buscando = true;
    

    this.moviesService.buscarPeliculas(valor)
        .subscribe( resp => {
          console.log(resp);
          this.peliculas = resp['results'];
          this.buscando = false;
          
        });
  }

  async detalle( id: string){
    //regresa una promesa
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    
    modal.present();
  }

}
