import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/app/servicios/rutas.service';
import { Arrayempleados } from 'src/app/interfaces/arrayempleados';

@Component({
  selector: 'app-listadocomponent',
  templateUrl: './listadocomponent.component.html',
  styleUrls: ['./listadocomponent.component.css']
})
export class ListadocomponentComponent implements OnInit {
  resultado: Arrayempleados;
  listado = null;

  constructor(private servicio: RutasService) { }

  ngOnInit() {
    
      this.servicio.getListado()
        .subscribe(arra => {
        this.resultado = arra
          this.listado = this.resultado.data
        });
    
  }
  
}
