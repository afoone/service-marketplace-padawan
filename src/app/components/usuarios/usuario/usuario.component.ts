import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuariosService } from '../../../service/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public id: string;
  
  constructor(private UsuariosService: UsuariosService,
              private route: ActivatedRoute) {
              }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchUsuario(this.id);
  }

  fetchUsuario(id: string){
    this.UsuariosService.getUsuario(id).then(
      res => {
        this.usuario = res
      }
    );
  }
}
