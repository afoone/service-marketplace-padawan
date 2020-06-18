import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedores/proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})

export class ProveedorCreateComponent implements OnInit {

  public nombre = '';
  public servicio = '';
  public descripcion = '';
  public cif = '';
  public correo = '';
  public telefono = '';
  public imagen = '';
  private id: string;

  constructor(private proveedorService: ProveedoresService,
              private router: Router,
              private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id) {
      this.proveedorService.getProveedor(this.id).then(
        res => {
          this.nombre = res.nombre;
          this.servicio = res.servicio;
          this.descripcion = res.descripcion;
          this.cif = res.cif;
          this.correo = res.correo;
          this.telefono = res.telefono;
          this.imagen = res.imagen;
        }
      );
    }
  }

  save = () => {
    const newProveedor = new Proveedor();
    newProveedor.nombre = this.nombre;
    newProveedor.servicio = this.servicio;
    newProveedor.descripcion = this.descripcion;
    newProveedor.cif = this.cif;
    newProveedor.correo = this.correo;
    newProveedor.telefono = this.telefono;
    newProveedor.imagen = this.imagen;
    if (this.id) {
      // estamos editando
      this.proveedorService.updateProveedor(this.id, newProveedor).then(
        () => {
          this.router.navigate(['proveedor/lista']); // redigir al proveedor
        }
      );
    } else {
      // estamos creando
      this.proveedorService.saveProveedor(newProveedor).then(
        () => {
          this.router.navigate(['proveedor/lista']);
        }
      );
    }
  }


}
