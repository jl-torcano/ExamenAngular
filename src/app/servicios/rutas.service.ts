import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Arrayempleados } from '../interfaces/arrayempleados';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(private http:HttpClient) { }

  getListado(){
    const path='http://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<Arrayempleados>(path);
  }

  getConsulta(id:number){
    const path='http://dummy.restapiexample.com/api/v1/employee/'+id;
    return this.http.get<Arrayempleados>(path);
  }

}
