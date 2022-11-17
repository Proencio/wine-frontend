import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEmpresaComponent } from './components/empresa/perfil-empresa/perfil-empresa.component';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'empresa',
    component: PerfilEmpresaComponent
  },
  // {
  //   path: 'produto/perfil',
  //   component: PerfilComponent
  // },
  // {
  //   path: 'pedido',
  //   component: PedidoComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
