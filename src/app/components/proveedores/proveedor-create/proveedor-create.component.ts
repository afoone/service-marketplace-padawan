import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedores/proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ServiciosService } from 'src/app/service/servicios.service';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})

export class ProveedorCreateComponent implements OnInit {


  public selectedItems = [];
  public dropdownSettings: IDropdownSettings = {};
  public nombre = '';
  public descripcion = '';
  public servicios = [];
  public serviciosList = [];
  public cif = '';
  public correo = '';
  public telefono = '';
  public imagen = '';
  private id: string;

  constructor(private proveedorService: ProveedoresService,
    private router: Router, private servicioService: ServiciosService,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {

    // carga componente servicios(todos)
    this.servicioService.getServicios().then(
      (res) => {
        this.serviciosList = res;
      }
    );
    this.id = this.ruta.snapshot.paramMap.get('id');
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'nombre',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Deseleccionar todos',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
    // Fin carga componente servicios(todos)

    // carga datos proveedor

    if (this.id) {

      this.proveedorService.getProveedor(this.id).then(
        res => {
          this.nombre = res.nombre;
          this.descripcion = res.descripcion;
          this.selectedItems = res.servicios;
          this.cif = res.cif;
          this.correo = res.correo;
          this.telefono = res.telefono;
          this.imagen = res.imagen;
        }

      );
    }

  }


  saveAndRedirect = () => {
    this.save(() => this.router.navigate(['proveedor/lista']));
  }

  saveAndStay = () => {
    this.save(() => {
      this.nombre = '';
      this.descripcion = '';
      this.servicios = [];
      this.cif = '';
      this.correo = '';
      this.telefono = '';
      this.imagen = '';
    });
  }


  private save = (finish: any) => {
    const newProveedor = new Proveedor();
    newProveedor.nombre = this.nombre;
    newProveedor.descripcion = this.descripcion;

    newProveedor.servicios = this.selectedItems.map(
      i => i._id);
    newProveedor.cif = this.cif;
    newProveedor.correo = this.correo;
    newProveedor.telefono = this.telefono;
    newProveedor.imagen = this.imagen;
    console.log('proveedor a guardar :' + newProveedor);
    if (this.id) {
      // estamos editando
      this.proveedorService.updateProveedor(this.id, newProveedor).then(
        () => {
          finish();
        }
      );
    } else {
      // estamos creando
      this.proveedorService.saveProveedor(newProveedor).then(
        () => {
          finish();
        }
      );
    }
  }
}
