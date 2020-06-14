import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvedorComponent } from './component/proveedores/proveedor/proveedor.component';
import {ProveedoresService} from "./service/proveedores.service";

@NgModule({
  declarations: [
    AppComponent,
    ProvedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
