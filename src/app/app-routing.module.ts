import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorListComponent } from './components/proveedores/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';


const routes: Routes = [
  { path: 'proveedor/lista', component: ProveedorListComponent },
  { path: 'proveedor/crear', component: ProveedorCreateComponent },
  { path: 'proveedor/editar/:id', component: ProveedorCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
