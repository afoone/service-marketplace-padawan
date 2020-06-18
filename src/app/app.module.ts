import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvedorComponent } from './components/proveedores/proveedor/proveedor.component';
import { ProveedoresService } from './service/proveedores.service';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorListComponent } from './components/proveedores/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProvedorComponent,
    ProveedorListComponent,
    ProveedorCreateComponent
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
