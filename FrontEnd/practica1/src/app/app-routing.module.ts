import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRACTICA1Component } from './componentes/practica1/practica1.component';
import {InicioComponent} from './componentes/inicio/inicio.component'

const routes: Routes = [
  {path: 'PRACTICA1', component: PRACTICA1Component},
  {path: 'Inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
