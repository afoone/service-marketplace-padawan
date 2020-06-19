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

  public proveedor: Proveedor = new Proveedor();
<<<<<<< HEAD
  public id: string; 
=======
  public id: string;
>>>>>>> 6d80262c7378716d7793106f6a9e95f0f43c9bde

  constructor(private proveedorService: ProveedoresService,
              private route: ActivatedRoute) {
    console.log('mensaje', proveedorService.mensaje);
  }

  ngOnInit(): void {
    // Ir a por el proveedor y poner en la variable
<<<<<<< HEAD
   this.id = this.route.snapshot.paramMap.get('id');
   this.fetchProveedor(this.id);
  
=======
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchProveedor(this.id);
>>>>>>> 6d80262c7378716d7793106f6a9e95f0f43c9bde
  }

  fetchProveedor(id: string) {
    this.proveedorService.getProveedor(id).then(
      res => {
        this.proveedor = res;
      }
    );
  }
}
