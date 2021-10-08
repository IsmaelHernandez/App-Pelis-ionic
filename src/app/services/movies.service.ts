import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //intectamos servicio de pelis
  constructor( private http:HttpClient) { }


  //primer servicio
  getFeature(){

    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31&api_key=bdd9512c3e4ed78025615a3eaf9fa94b&language=es`);


  }
}
