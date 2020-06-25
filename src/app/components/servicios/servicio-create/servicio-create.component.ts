import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicios/servicio';
import { ServiciosService } from 'src/app/service/servicios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css']
})

export class ServicioCreateComponent implements OnInit {
private id:string;
  public nombre = '';
  public precio = '';
  public descripcion = '';
  public imagen = '';



  constructor(private servicioService: ServiciosService,
    private router: Router,
    private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id) {
      this.servicioService.getServicio(this.id).then(
        res => {

          this.nombre = res.nombre;
          this.precio = res.precio;
          this.descripcion = res.descripcion;
          this.imagen = res.imagen;
        }
      );
    }
  }


  saveAndRedirect = () => {
    this.save(() => this.router.navigate(['servicio/lista']));
  }

  saveAndStay = () => {
    this.save(() => {
      this.nombre = '';
      this.precio = '';
      this.descripcion = '';
      this.imagen = '';
    });
  }

  private save = (finish: any) => {
    const newServicio = new Servicio();
    newServicio.nombre = this.nombre;
    newServicio.precio = this.precio;
    newServicio.descripcion = this.descripcion;
    newServicio.imagen = this.imagen;

    if (this.id) {
      // estamos editando
      this.servicioService.updateServicio(this.id, newServicio).then(
        () => {
          finish();
        }
      );
    } else {
      // estamos creando
      this.servicioService.saveServicio(newServicio).then(
        () => {
          finish();
        }
      );
    }
  }

}
