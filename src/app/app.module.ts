import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultacomponentComponent } from './componentes/consultacomponent/consultacomponent.component';
import { ListadocomponentComponent } from './componentes/listadocomponent/listadocomponent.component';
import { ToledocomponentComponent } from './componentes/toledocomponent/toledocomponent.component';
import { MadridcomponentComponent } from './componentes/madridcomponent/madridcomponent.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    ConsultacomponentComponent,
    ListadocomponentComponent,
    ToledocomponentComponent,
    MadridcomponentComponent,
    BarraLateralComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
