import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {
  public usuarios: Usuario[];
  public usuario: Usuario;
  public usuarioService: any;
  public id: string;
  public error: string;

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchUsuarios();
  }

  fetchUsuarios() {
    this.usuariosService
      .getUsuarios()
      .then((res) => {
        this.usuarios = res;
        this.error = null;
      })
      .catch((err) => (this.error = 'No está autorizado para ver esto'));
  }

  delete(id: string) {
    this.usuariosService
      .deleteUsuario(id)
      .then(() => this.fetchUsuarios())
      .catch(
        (err) => (this.error = 'No está autorizado para borrar elementos')
      );
  }

  getUsuario(item: any) {
    this.router.navigate(['usuario/' + item._id]);
  }

  updateUsuario(item: any) {
    this.router.navigate(['usuario/editar/' + item._id]);
  }
}
