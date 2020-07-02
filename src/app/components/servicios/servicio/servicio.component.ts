import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/service/servicios.service';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from 'src/app/models/servicios/servicio';
import { Proveedor } from 'src/app/models/proveedores/proveedor';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  public servicio: Servicio = new Servicio();
  public proveedores: Proveedor[] = [];

  public id: string;

  constructor(private servicioService: ServiciosService, private route: ActivatedRoute) {
    console.log('mensaje', servicioService.mensaje);
  }
  ngOnInit(): void {
    // Ir a por el servicio y poner en la variable
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchServicio(this.id);
    console.log(this.id);
  }

  fetchServicio(id: string) {
    this.servicioService.getServicio(id).then(
      res => {
        this.servicio = res;
      }
    );
  }

  fetchProveedores(id: string) {
    // TODO: hacer
    console.log("recuperando proveedores");
    // al recuperar los proveedores los almacenamos en la variable proveedores
  }


}



