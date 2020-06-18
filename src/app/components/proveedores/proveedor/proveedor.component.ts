import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Proveedor } from 'src/app/models/proveedores/proveedor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  public proveedor: Proveedor;
  public id: string;

  constructor(private proveedorService: ProveedoresService,
              private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    // Ir a por el proveedor y poner en la variable
    /* this.fetchProveedor(); */
   this.id = this.route.snapshot.paramMap.get('id');
  
  }

  fetchProveedor() {
    this.proveedorService.getProveedor(this.id).then(
     res => {
       this.proveedor = res;
     }
   )
  }
}
