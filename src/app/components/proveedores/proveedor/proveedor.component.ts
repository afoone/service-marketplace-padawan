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
  public id: string;

  constructor(private proveedorService: ProveedoresService,
              private route: ActivatedRoute) {
    console.log('mensaje', proveedorService.mensaje);
  }

  ngOnInit(): void {
    // Ir a por el proveedor y poner en la variable
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchProveedor(this.id);
    console.log(this.id);
  }

  fetchProveedor(id: string) {
    this.proveedorService.getProveedor(id).then(
      res => {
        this.proveedor = res;
      }
    );
  }
}
