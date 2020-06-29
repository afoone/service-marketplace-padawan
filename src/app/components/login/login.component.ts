import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuario = '';
  public password = '';

  constructor(private loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.usuario, this.password).then(
      res => {
        this.loginService.token = res.token;
        console.log('token', this.loginService.token);
        this.router.navigate(['/login']);
      }
    );
    .catch (console.log('Ha fallado');

    // TODO: llamar al login service (login/) (o usuario service) con un elemento de la forma:
    // {
    //  "usuario": "alfonso",
    //  "password" : "pepe"
    // }
    // @TODO: Al recuperar el token lo guardamos en localstorage
  }
}
