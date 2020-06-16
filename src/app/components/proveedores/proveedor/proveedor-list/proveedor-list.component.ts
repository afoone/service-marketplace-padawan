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

  public proveedores$:Observable<Proveedor[]>;

  constructor(private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores$ = this.proveedoresService.getProveedores();
  }

}
