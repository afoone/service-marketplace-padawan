import { Injectable } from '@angular/core';
import { Servicio } from '../models/servicios/servicio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public servicios: Servicio[];

  public mensaje = 'Vacio' ;

  constructor(private httpClient: HttpClient) {

  }

  getServicios = () => {
    this.mensaje = 'he pasado por la lista';
    console.log('mensaje en singleton', this.mensaje);
    return this.httpClient.get<Servicio[]>('http://localhost:4000/servicio/').toPromise();
  }

  saveServicio = (servicio: Servicio) => {
    return this.httpClient.post<Servicio>(
      'http://localhost:4000/servicio/', servicio).toPromise();
  }


  // Mejora de código
  deleteServicio = (id: string) => {
    return this.httpClient.delete<Servicio>(
      'http://localhost:4000/servicio/' + id).toPromise();
  }

  updateServicio = (id: string, servicio: Servicio) => {
    return this.httpClient.put<Servicio>(
      'http://localhost:4000/servicio/' + id, servicio).toPromise();
  }

  getServicio = (id: string) => {
    return this.httpClient.get<Servicio>('http://localhost:4000/servicio/' + id).toPromise();
  }
}
