import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorListComponent } from './components/proveedores/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorComponent } from './components/proveedores/proveedor/proveedor.component';
import { HomeComponent } from './components/home/home.component';
import { ServicioListComponent } from './components/servicios/servicio-list/servicio-list.component';
import { ServicioCreateComponent } from './components/servicios/servicio-create/servicio-create.component';
import { ServicioComponent } from './components/servicios/servicio/servicio.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'proveedor/lista', component: ProveedorListComponent },
  { path: 'proveedor/crear', component: ProveedorCreateComponent },
  { path: 'proveedor/editar/:id', component: ProveedorCreateComponent },
  { path: 'proveedor/:id', component: ProveedorComponent},

  { path: 'servicio/lista', component: ServicioListComponent },
  { path: 'servicio/crear', component: ServicioCreateComponent },
  { path: 'servicio/editar/:id', component: ServicioCreateComponent },
  { path: 'servicio/:id', component: ServicioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
