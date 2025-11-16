import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { SerieComponentComponent } from './components/serie-component/serie-component.component';
import { PersonajesComponentComponent } from './components/personajes-component/personajes-component.component';
import { CreatePersonajeComponentComponent } from './components/create-personaje-component/create-personaje-component.component';
import { UpdatePersonajeComponentComponent } from './components/update-personaje-component/update-personaje-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'home', component: HomeComponentComponent },
  { path: 'series/:idSerie', component: SerieComponentComponent },
  { path: 'personajes', component: PersonajesComponentComponent },
  { path: 'create', component: CreatePersonajeComponentComponent },
  { path: 'update/?:id', component: UpdatePersonajeComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
