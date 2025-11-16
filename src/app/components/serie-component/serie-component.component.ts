import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Serie } from '../../models/serie.model';
import { SeriesPersonajesService } from '../../services/series-personajes.service';

@Component({
  selector: 'app-serie-component',
  standalone: false,
  templateUrl: './serie-component.component.html',
  styleUrl: './serie-component.component.css'
})
export class SerieComponentComponent implements OnInit {
  public serie!: Serie;

  constructor(
    private _service: SeriesPersonajesService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let idSerie = parseInt(params['idSerie']);
      this._service.findSerie(idSerie).subscribe(response => {
        this.serie = response;
      });
    });
  }
}
