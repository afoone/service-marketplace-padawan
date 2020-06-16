import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorListComponent } from './components/proveedores/proveedor/proveedor-list/proveedor-list.component';



const routes: Routes = [
  {path:'proveedor/lista', component: ProveedorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
