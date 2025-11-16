import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Personaje } from '../models/personaje.model';
import { Serie } from '../models/serie.model';

@Injectable()
export class SeriesPersonajesService {
  constructor(private _http: HttpClient) { }

  // Personajes CRUD
  getPersonajes(): Observable<Array<Personaje>> {
    let request = 'api/personajes';
    let url = environment.urlApiSeries + '/' + request;
    return this._http.get<Array<Personaje>>(url);
  }

  findPersonaje(idPersonaje: number): Observable<Personaje> {
    let request = 'api/personajes/' + idPersonaje;
    let url = environment.urlApiSeries + '/' + request;
    return this._http.get<Personaje>(url);
  }

  createPersonaje(personaje: Personaje): Observable<any> {
    let json = JSON.stringify(personaje);
    let header = new HttpHeaders();
    header = header.set('Content-type', 'application/json');

    let request = 'api/personajes';
    let url = environment.urlApiSeries + '/' + request;
    return this._http.post<Array<Personaje>>(url, json, { headers: header });
  }

  updatePersonaje(personaje: Personaje): Observable<any> {
    let json = JSON.stringify(personaje);
    let header = new HttpHeaders().set('Content-type', 'application/json');

    let request = 'api/personajes';
    let url = environment.urlApiSeries + '/' + request;
    return this._http.put(url, json, { headers: header });
  }

  deletePersonaje(idPersonaje: number): Observable<any> {
    let request = 'api/personajes/' + idPersonaje;
    let url = environment.urlApiSeries + '/' + request;
    return this._http.delete(url);
  }

  // Series CRUD
  getSeries(): Observable<Array<Serie>> {
    let request = 'api/series';
    let url = environment.urlApiSeries + '/' + request;
    return this._http.get<Array<Serie>>(url);
  }

  findSerie(idSerie: number): Observable<Serie> {
    let request = 'api/series/' + idSerie;
    let url = environment.urlApiSeries + '/' + request;
    return this._http.get<Serie>(url);
  }

  createSerie(serie: Serie): Observable<any> {
    let json = JSON.stringify(serie);
    let header = new HttpHeaders();
    header = header.set('Content-type', 'application/json');

    let request = 'api/series';
    let url = environment.urlApiSeries + '/' + request;
    return this._http.post<Array<Serie>>(url, json, { headers: header });
  }

  updateSerie(serie: Serie): Observable<any> {
    let json = JSON.stringify(serie);
    let header = new HttpHeaders().set('Content-type', 'application/json');

    let request = 'api/series';
    let url = environment.urlApiSeries + '/' + request;
    return this._http.put(url, json, { headers: header });
  }

  deleteSerie(idSerie: number): Observable<any> {
    let request = 'api/series/' + idSerie;
    let url = environment.urlApiSeries + '/' + request;
    return this._http.delete(url);
  }
}

