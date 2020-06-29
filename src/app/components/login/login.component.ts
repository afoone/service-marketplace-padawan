import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuario = '';
  public password = '';

  constructor() {}

  ngOnInit(): void {}

  login() {
    // TODO: llamar al login service (login/) (o usuario service) con un elemento de la forma:
    // {
    //  "usuario": "alfonso",
    //  "password" : "pepe"
    // }
    // @TODO: Al recuperar el token lo guardamos en localstorage
  }
}
