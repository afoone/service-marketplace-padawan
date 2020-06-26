import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  public usuarios: Usuario[];

  constructor(private http: HttpClient) {}

  getUsuarios = () => {
    return this.http
      .get<Usuario[]>('http://localhost:4000/usuario/')
      .toPromise();
  };

  saveUsuario = (usuario: Usuario) => {
    return this.http
      .post<Usuario>('http://localhost:4000/usuario/', usuario)
      .toPromise();
  };

  deleteUsuario = (id: string) => {
    return this.http
      .delete<Usuario>('http://localhost:4000/usuario/' + id)
      .toPromise();
  };

  updateUsuario = (id: string, usuario: Usuario) => {
    return this.http
      .put<Usuario>('http://localhost:4000/usuario/' + id, usuario)
      .toPromise();
  };

  getUsuario = (id: string) => {
    return this.http
      .get<Usuario>('http://localhost:4000/usuario/' + id)
      .toPromise();
  };
}
