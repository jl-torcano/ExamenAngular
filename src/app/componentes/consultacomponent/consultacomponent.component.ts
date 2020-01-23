import { Component, OnInit } from '@angular/core';
import { Empleados } from 'src/app/interfaces/empleados';
import { RutasService } from 'src/app/servicios/rutas.service';
import { Arrayempleados } from 'src/app/interfaces/arrayempleados';

@Component({
  selector: 'app-consultacomponent',
  templateUrl: './consultacomponent.component.html',
  styleUrls: ['./consultacomponent.component.css']
})
export class ConsultacomponentComponent implements OnInit {

  emp: Empleados = { id: "", employee_name: "", employee_salary: "", employee_age: "", profile_image: "" }
  ipc: string;
  resultado: Arrayempleados;
  listado = null;
  sueldoipc:number;

  constructor(private servicio: RutasService) {

  }

  ngOnInit() {
  }

  /*consulta(id: number) {
    this.servicio.getConsulta(2)
      .subscribe(arra => {
        this.resultado = arra
        this.listado = this.resultado[0]
        this.emp=this.listado.data;
      });      
  }*/

  consulta(id: number, ipc: number) {
    this.servicio.getListado()
      .subscribe(arra => {
        this.resultado = arra
        this.listado = this.resultado.data
        this.emp=this.listado[id-1]
        this.sueldoipc=parseInt(this.emp.employee_salary)*ipc;
      });

  }

}


