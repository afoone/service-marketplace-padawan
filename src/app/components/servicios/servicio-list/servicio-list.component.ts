import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicios/servicio';
import { ServiciosService } from 'src/app/service/servicios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css'],
})
export class ServicioListComponent implements OnInit {
  public listaServicios: Servicio[];
  public servicio: Servicio;
  public servicioService: any;
  public id: string;
  // public borrado: boolean;

  constructor(
    private serviciosService: ServiciosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchServicios();
    console.log(this.id);
  }

  fetchServicios() {
    this.serviciosService.getServicios().then((res) => {
      this.listaServicios = res;
    });
  }

  delete(id: string) {
    const borrado = confirm('¿Seguro que quiere borrar?');
    if (borrado) {

      this.serviciosService.deleteServicio(id).then(() => this.fetchServicios());
    }
  }

  getServicio(item: any) {
    this.router.navigate(['servicio/' + item._id]);
  }

  updateServicio(item: any) {
    this.router.navigate(['servicio/editar/' + item._id]);
  }
}
