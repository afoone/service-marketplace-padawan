import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvedorComponent } from './component/proveedores/proveedor/proveedor.component';
import {ProveedoresService} from "./service/proveedores.service";
import { HttpClientModule } from '@angular/common/http';
import { ProveedorListComponent } from './components/proveedores/proveedor/proveedor-list/proveedor-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvedorComponent,
    ProveedorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
