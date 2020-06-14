import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/service/proveedores.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProvedorComponent implements OnInit {

  constructor(private proveedorService: ProveedoresService) {

    console.log("proveedores", proveedorService.proveedores);
   }

  ngOnInit(): void {
  }

}
