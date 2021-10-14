import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos','La vida es Bella'];

  constructor( private moviesService: MoviesService) {}

  //Metodo buscar de tab2-buscar
  buscar( event ) {

    const valor = event.detail.value;
    this.moviesService.buscarPeliculas(valor)
        .subscribe( resp => {
          console.log(resp);
        });
  }

}
