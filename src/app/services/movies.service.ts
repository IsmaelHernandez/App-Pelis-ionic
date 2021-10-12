import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaMDB } from '../interfaces/interfaces';


//variables de ambiente de la api 
const URL = environment.url;
const apikey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //inyectamos servicio de pelis
  constructor( private http:HttpClient) { }

  private ejecutarQuery<T>( query: string ) {

    query = URL + query;
    query += `&api_key=${ apikey }&language=es&include_image_lenguage=es`;

    return this.http.get<T>( query );
  }

  //metodo peliculas populares
  getPopulares(){

    const query = '/discover/movie?sort_by=popularity.desc';
    return this.ejecutarQuery<RespuestaMDB>(query);

  }

  //primer servicio
  getFeature(){

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if ( mes < 10 ){
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const inicio  = `${ hoy.getFullYear()}-${ mesString }-01`;
    const fin  = `${ hoy.getFullYear()}-${ mesString }-${ultimoDia}`;
    

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);


  }
}
