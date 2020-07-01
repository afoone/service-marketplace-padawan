import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';

import { ProveedorListComponent } from './components/proveedores/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorComponent } from './components/proveedores/proveedor/proveedor.component';
import { ProveedoresService } from './service/proveedores.service';

import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';

import { ServicioListComponent } from './components/servicios/servicio-list/servicio-list.component';
import { ServicioCreateComponent } from './components/servicios/servicio-create/servicio-create.component';
import { ServicioComponent } from './components/servicios/servicio/servicio.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    ProveedorListComponent,
    ProveedorCreateComponent,
    HeaderComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioListComponent,
    ServicioComponent,
    ServicioCreateComponent,
    ServicioListComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgMultiSelectDropDownModule.forRoot()],
  providers: [
    ProveedoresService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
