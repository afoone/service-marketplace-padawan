import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedorComponent } from './components/proveedores/proveedor/proveedor.component';
import { ProveedoresService } from './service/proveedores.service';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorListComponent } from './components/proveedores/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
=======
import { ServicioComponent } from './components/servicios/servicio/servicio.component';
import { ServicioCreateComponent } from './components/servicios/servicio-create/servicio-create.component';
import { ServicioListComponent } from './components/servicios/servicio-list/servicio-list.component';
>>>>>>> e25866992786fa1d588591ba116d106c0c267ba1

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    ProveedorListComponent,
    ProveedorCreateComponent,
    HeaderComponent,
    HomeComponent,
<<<<<<< HEAD
    UsuarioComponent,
    UsuarioCreateComponent,
    UsuarioListComponent
=======
    ServicioComponent,
    ServicioCreateComponent,
    ServicioListComponent
>>>>>>> e25866992786fa1d588591ba116d106c0c267ba1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
