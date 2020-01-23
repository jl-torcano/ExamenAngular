import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MadridcomponentComponent } from './componentes/madridcomponent/madridcomponent.component';
import { ToledocomponentComponent } from './componentes/toledocomponent/toledocomponent.component';
import { ListadocomponentComponent } from './componentes/listadocomponent/listadocomponent.component';
import { ConsultacomponentComponent } from './componentes/consultacomponent/consultacomponent.component';
import { InicioComponent } from './componentes/inicio/inicio.component';


const routes: Routes = [{
  path:'',
  component: InicioComponent
}, {
  path: 'madrid',
  component: MadridcomponentComponent
}, {
  path: 'toledo',
  component: ToledocomponentComponent
}, {
  path: 'listado',
  component: ListadocomponentComponent
}, {
  path: 'consulta',
  component: ConsultacomponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
