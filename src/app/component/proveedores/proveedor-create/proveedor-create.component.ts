import { Component, OnInit } from '@angular/core';
import { Proveedor} from 'src/app/models/proveedores/proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {

  public nombre: string = "";
  public servicio = '';
  public descripcion = '';
  public cif = '';
  public correo = '';
  public telefono = '';
  public imagen = '';
  private id : string;
  
  constructor(private proveedorService: ProveedoresService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save = () => {
    const newProveedor: Proveedor = new Proveedor();
    newProveedor.nombre = this.nombre;
    newProveedor.servicio = this.servicio;
    newProveedor.descripcion = this.descripcion;
    newProveedor.cif = this.cif;
    newProveedor.correo = this.correo;
    newProveedor.telefono = this.telefono;
    newProveedor.imagen = this.imagen;
    this.proveedorService.saveProveedor(newProveedor).subscribe(
      () => {
        
        this.router.navigate(['proveedor/lista'])
      }
    )
    console.log(newProveedor);
  }
}
