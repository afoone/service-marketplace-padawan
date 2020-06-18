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
     return this.httpClient.get<Proveedor[]>("http://localhost:4000/proveedor/lista_prov").toPromise()
   }

   saveProveedor = (proveedor: Proveedor) => {
     return this.httpClient.post<Proveedor>(
       'http://localhost:4000/proveedor/crear_prov', proveedor)
   }

   deleteProveedor = (id: string) => {
     return this.httpClient.delete<Proveedor>(
       'http://localhost:4000/proveedor/borrar_prov/' + id)
   }
}
