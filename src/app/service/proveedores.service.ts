import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedores/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  public proveedores: Proveedor[];
  
  constructor() { }
}
