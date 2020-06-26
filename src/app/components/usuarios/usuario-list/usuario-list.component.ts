import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent implements OnInit {

    public usuarios: Usuario[];
    public usuario: Usuario;
    public usuarioService: any;
    public id: string;

  constructor(private usuariosService: UsuariosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchUsuarios();
  }

  fetchUsuarios() {
    this.usuariosService.getUsuarios().then(
      res => {
        this.usuarios = res;
      }
    );
  }

  delete(id: string) {
    this.usuarioService.deleteUsuario(id).then(
      () => this.fetchUsuarios()
    );
  }

  getUsuario(item: any) {
    this.router.navigate(["usuario/" + item._id]);
  }

  updateUsuario(item: any) {
    this.router.navigate(["usuario/editar/" + (item._id)]);
  }

}
