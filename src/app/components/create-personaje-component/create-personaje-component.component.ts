import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesPersonajesService } from '../../services/series-personajes.service';
import { Personaje } from '../../models/personaje.model';
import { Serie } from '../../models/serie.model';

@Component({
  selector: 'app-create-personaje-component',
  standalone: false,
  templateUrl: './create-personaje-component.component.html',
  styleUrl: './create-personaje-component.component.css'
})
export class CreatePersonajeComponentComponent implements OnInit {
  @ViewChild('nombre') cajaNombre!: ElementRef<HTMLInputElement>;
  @ViewChild('imagen') cajaImagen!: ElementRef<HTMLInputElement>;
  @ViewChild('idSerie') cajaIdSerie!: ElementRef<HTMLSelectElement>;

  public imagenPreview: string = '';
  public series: Array<Serie> = [];

  constructor(
    private _service: SeriesPersonajesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._service.getSeries().subscribe(response => {
      this.series = response;
    });
  }

  insertPersonaje(): void {
    let nombre = this.cajaNombre.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let idSerie = parseInt(this.cajaIdSerie.nativeElement.value);

    let personaje = new Personaje(0, nombre, imagen, idSerie);
    this._service.createPersonaje(personaje).subscribe(response => {
      this._router.navigate(['/personajes', idSerie]);
    });
  }
}
