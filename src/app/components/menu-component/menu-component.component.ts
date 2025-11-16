import { Component, OnInit } from '@angular/core';
import { SeriesPersonajesService } from '../../services/series-personajes.service';
import { Serie } from '../../models/serie.model';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponentComponent implements OnInit {
  series: Array<Serie> = [];
  constructor(private _service: SeriesPersonajesService) {

  }
  ngOnInit(): void {
    this._service.getSeries().subscribe(data => {
      this.series = data;
    });
  }
}
