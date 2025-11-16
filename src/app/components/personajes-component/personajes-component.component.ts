import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SeriesPersonajesService } from '../../services/series-personajes.service';
import { Personaje } from '../../models/personaje.model';

@Component({
  selector: 'app-personajes-component',
  standalone: false,
  templateUrl: './personajes-component.component.html',
  styleUrl: './personajes-component.component.css'
})
export class PersonajesComponentComponent implements OnInit {
  public personajes: Array<Personaje> = [];
  public idSerie: number = 0;

  constructor(
    private _service: SeriesPersonajesService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.idSerie = parseInt(params['idSerie']);
      this._service.getPersonajes(this.idSerie).subscribe(response => {
        this.personajes = response;
      });
    });
  }
}
