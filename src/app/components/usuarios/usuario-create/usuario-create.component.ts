import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario'
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

    public nombre = '';
    public usuario = '';
    public password = '';
    public correo = '';
    public roles = [];
    private id: string;
  constructor(private usuarioService: UsuariosService,
              private router: Router,
              private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id) {
      this.usuarioService.getUsuario(this.id).then(
        res => {
          this.nombre = res.nombre;
          this.usuario = res.usuario;
          this.password = res.password;
          this.correo = res.correo;
          this.roles = res.roles;

        }
      );
    }
  }

  saveAndRedirect = () => {
    this.save(() => this.router.navigate(['usuario/lista']));
  }

  saveAndStay = () => {
    this.save(() => {
      this.nombre = '';
      this.usuario = '';
      this.password = '';
      this.correo = '';
      this.roles = [];
    });
  }

  private save = (finish: any) => {
    const newUsuario = new Usuario();
    newUsuario.nombre = this.nombre;
    newUsuario.usuario = this.usuario;
    newUsuario.password = this.password;
    newUsuario.correo = this.correo;
    newUsuario.roles = this.roles;
    if (this.id) {
      // estamos editando
      this.usuarioService.updateUsuario(this.id, newUsuario).then(
        () => {
          finish();
        }
      );
    } else {
      // estamos creando
      this.usuarioService.saveUsuario(newUsuario).then(
        () => {
          finish();
        }
      );
    }
  }

}
