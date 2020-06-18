import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedores/proveedor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  public proveedores: Proveedor[];

  constructor(private httpClient: HttpClient) {

   }

   getProveedores = () => {
     return this.httpClient.get<Proveedor[]>('http://localhost:4000/proveedor/').toPromise();
   }

   saveProveedor = (proveedor: Proveedor) => {
     return this.httpClient.post<Proveedor>(
       'http://localhost:4000/proveedor/', proveedor).toPromise();
   }


   // Mejora de código
   deleteProveedor = (id: string) => {
     return this.httpClient.delete<Proveedor>(
       'http://localhost:4000/proveedor/' + id).toPromise();
   }

   updateProveedor = (id: string, proveedor: Proveedor) => {
     return this.httpClient.put<Proveedor>(
      'http://localhost:4000/proveedor/' + id, proveedor).toPromise();
   }

    getProveedor = (id: string) => {
    return this.httpClient.get<Proveedor>('http://localhost:4000/proveedor/' + id).toPromise();
  }
}
