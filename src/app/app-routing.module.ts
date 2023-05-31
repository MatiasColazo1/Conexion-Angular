import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  { path:'inicio', component: InicioComponent},
  { path:'add', component: AgregarComponent},
  { path:'edit/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
