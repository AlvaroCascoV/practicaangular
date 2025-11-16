import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesPersonajesService } from '../../services/series-personajes.service';
import { Personaje } from '../../models/personaje.model';
import { Serie } from '../../models/serie.model';

@Component({
  selector: 'app-update-personaje-component',
  standalone: false,
  templateUrl: './update-personaje-component.component.html',
  styleUrl: './update-personaje-component.component.css'
})
export class UpdatePersonajeComponentComponent implements OnInit {
  @ViewChild('cajaIdPersonaje') cajaIdPersonaje!: ElementRef<HTMLSelectElement>;
  @ViewChild('cajaIdSerie') cajaIdSerie!: ElementRef<HTMLSelectElement>;

  public personajes: Array<Personaje> = [];
  public series: Array<Serie> = [];

  constructor(
    private _service: SeriesPersonajesService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._service.getPersonajes().subscribe(response => {
      this.personajes = response;
    });

    this._service.getSeries().subscribe(response => {
      this.series = response;
    });
  }

  updatePersonaje(): void {
    let idPersonaje = parseInt(this.cajaIdPersonaje.nativeElement.value);
    let idSerie = parseInt(this.cajaIdSerie.nativeElement.value);

    this._service.findPersonaje(idPersonaje).subscribe((response: Personaje) => {
      let personaje = response;
      personaje.idSerie = idSerie;
      this._service.updatePersonaje(personaje).subscribe(() => {
        this._router.navigate(['/personajes', idSerie]);
      });
    });
  }
}
