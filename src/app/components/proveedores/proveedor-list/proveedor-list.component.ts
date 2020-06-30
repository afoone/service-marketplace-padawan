import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedores/proveedor';
import { ProveedoresService } from 'src/app/service/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})

export class ProveedorListComponent implements OnInit {

  public proveedores: Proveedor[];
  public proveedor: Proveedor;
  public proveedorService: any;
  public id: string;

  constructor(private proveedoresService: ProveedoresService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchProveedores();
  }

  fetchProveedores() {
    this.proveedoresService.getProveedores().then(
      (res) => {
        this.proveedores = res;
      }
    );
  }

  delete(id: string) {
    this.proveedoresService.deleteProveedor(id).then(
      () => this.fetchProveedores()
    );
  }


  getProveedor(item: any) {
    this.router.navigate(['proveedor/' + item._id]);
  }

  updateProveedor(item: any) {
    this.router.navigate(['proveedor/editar/' + (item._id)]);
  }

}
