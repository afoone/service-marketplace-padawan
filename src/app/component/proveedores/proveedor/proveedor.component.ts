import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Proveedor } from 'src/app/models/proveedores/proveedor';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProvedorComponent implements OnInit {

  // public proveedor: Proveedor;

  constructor(private proveedorService: ProveedoresService) {

    console.log("proveedores", proveedorService.proveedores);
   }

  ngOnInit(): void {
    // Ir a por el proveedor y poner en la variable
  }

}
