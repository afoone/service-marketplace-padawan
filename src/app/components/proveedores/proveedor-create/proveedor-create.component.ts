import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedores/proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ServiciosService } from 'src/app/service/servicios.service';
//import { ServicioList } from 'src/app/components/servicios/servicio-list';



@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})

export class ProveedorCreateComponent implements OnInit {


  public servicioList: any[] = [];
  public selectedItems = [];
  public dropdownSettings: IDropdownSettings = {};
  public nombre = '';
  public descripcion = '';
  public cif = '';
  public correo = '';
  public telefono = '';
  public imagen = '';
  private id: string;

  constructor(private proveedorService: ProveedoresService,
    private router: Router, private servicioService: ServiciosService,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {

    // this.servicioList = [
    //   { "_id": 1, nombre: 'Mumbai' },
    //   { "_id": 2, nombre: 'Bangaluru' },
    //   { "_id": 3, nombre: 'Pune' },
    //   { "_id": 4, nombre: 'Navsari' },
    //   { "_id": 5, nombre: 'New Delhi' }
    // ];
    //llamarlo desde el interceptor
    this.servicioService.getServicios().then((res) => {
      this.servicioList = res;
    }
    )
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'nombre',
      selectAllText: 'Seleccionar todos',
      unSelectAllText: 'Deseleccionar todos',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

    if (this.id) {
      this.proveedorService.getProveedor(this.id).then(
        res => {
          this.nombre = res.nombre;
          this.descripcion = res.descripcion;
          this.cif = res.cif;
          this.correo = res.correo;
          this.telefono = res.telefono;
          this.imagen = res.imagen;
        }
      );
    }
  }
  // cargarlistaServicios() {
  //   // this.id = this.ruta.snapshot.paramMap.get('id');
  //   this.servicioService.getServicios().then((res) => {
  //     this.servicioList = res;
  //   }
  // }

  saveAndRedirect = () => {
    this.save(() => this.router.navigate(['proveedor/lista']));
  }

  saveAndStay = () => {
    this.save(() => {
      this.nombre = '';
      this.descripcion = '';
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
    newProveedor.cif = this.cif;
    newProveedor.correo = this.correo;
    newProveedor.telefono = this.telefono;
    newProveedor.imagen = this.imagen;
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
