import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenAngular';

  constructor(private router:Router){

  }

  irMadrid(){
    this.router.navigate(['madrid']);
  }

  irToledo(){
    this.router.navigate(['toledo']);
  }

  irListado(){
    this.router.navigate(['listado']);
  }

  irConsulta(){
    this.router.navigate(['consulta']);
  }

}


