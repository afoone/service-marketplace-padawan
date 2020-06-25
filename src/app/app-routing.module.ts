import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorListComponent } from './components/proveedores/proveedor-list/proveedor-list.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorComponent } from './components/proveedores/proveedor/proveedor.component';

import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { UsuarioCreateComponent } from './components/usuarios/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'proveedor/lista', component: ProveedorListComponent },
  { path: 'proveedor/crear', component: ProveedorCreateComponent },
  { path: 'proveedor/editar/:id', component: ProveedorCreateComponent },
  { path: 'proveedor/:id', component: ProveedorComponent},

  { path: 'usario/lista', component: UsuarioListComponent},
  { path: 'usuario/crear', component: UsuarioCreateComponent},
  { path: 'usuario/editar/:id', component: UsuarioCreateComponent},
  { path: 'usuario/:id', component: UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
