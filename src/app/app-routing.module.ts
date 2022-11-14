import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PedidoComponent } from './components/pagamento/pedido/pedido.component';
import { PerfilComponent } from './components/produto/perfil/perfil.component';
import { ProdutosComponent } from './components/produtos/produtos/produtos.component';
import { SacolaComponent } from './components/sacola/sacola/sacola.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'sacola',
    component: SacolaComponent
  },
  {
    path: 'produto/perfil',
    component: PerfilComponent
  },
  {
    path: 'pedido',
    component: PedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
