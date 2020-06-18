import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedores/proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  public proveedores:Proveedor[];

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.fetchProveedores();
  }

  fetchProveedores() {
    /* this.proveedoresService.getProveedores().subscribe(
      (res) =>  
      {
        this.proveedores = res
      }
    ); */

    this.proveedoresService.getProveedores().then(
      (res) =>  
      {
        this.proveedores = res
      }
    )
  }

  delete(e: Event, id: string) {
    // e.preventDefault();solo para enlaces o que tengan comportamiento por defecto
    this.proveedoresService.deleteProveedor(id).subscribe(
      () => this.fetchProveedores()
    )

  }
}
