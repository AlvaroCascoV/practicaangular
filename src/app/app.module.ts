import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { SerieComponentComponent } from './components/serie-component/serie-component.component';
import { PersonajesComponentComponent } from './components/personajes-component/personajes-component.component';
import { CreatePersonajeComponentComponent } from './components/create-personaje-component/create-personaje-component.component';
import { UpdatePersonajeComponentComponent } from './components/update-personaje-component/update-personaje-component.component';
import { SeriesPersonajesService } from './services/series-personajes.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    HomeComponentComponent,
    SerieComponentComponent,
    PersonajesComponentComponent,
    CreatePersonajeComponentComponent,
    UpdatePersonajeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SeriesPersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
