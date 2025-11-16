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
  public idSerie!: number;
  public serie!: Serie;

  constructor(
    private _service: SeriesPersonajesService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.idSerie = +params['id'];
      this._service.findSerie(this.idSerie).subscribe(data => {
        this.serie = data;
      });
    });
  }
}
