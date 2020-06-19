import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorListComponent } from './components/proveedores/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorComponent } from './components/proveedores/proveedor/proveedor.component';

const routes: Routes = [
  { path: '', component: ProveedorListComponent},
  { path: 'proveedor/lista', component: ProveedorListComponent },
  { path: 'proveedor/crear', component: ProveedorCreateComponent },
  { path: 'proveedor/editar/:id', component: ProveedorCreateComponent },
  { path: 'proveedor/:id', component: ProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
