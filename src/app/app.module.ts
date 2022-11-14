import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { CarrocelComponent } from './components/carrocel/carrocel/carrocel.component';
import { DestaqueComponent } from './components/destaque/destaque/destaque.component';
import { ProdutoComponent } from './components/destaque/produto/produto.component';
import { MaisVendidosComponent } from './components/destaque/mais-vendidos/mais-vendidos.component';
import { ComentarioComponent } from './components/comentario/comentario/comentario.component';
import { ComentariosComponent } from './components/comentario/comentarios/comentarios.component';
import { MapaComponent } from './components/mapa-site/mapa/mapa.component';
import { MapaSiteComponent } from './components/mapa-site/mapa-site.component';
import { ProdutosComponent } from './components/produtos/produtos/produtos.component';
import { SacolaComponent } from './components/sacola/sacola/sacola.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutoModelComponent } from './components/produto-model/produto-model.component';
import { PerfilComponent } from './components/produto/perfil/perfil.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PedidoComponent } from './components/pagamento/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrocelComponent,
    DestaqueComponent,
    ProdutoComponent,
    MaisVendidosComponent,
    ComentarioComponent,
    ComentariosComponent,
    MapaComponent,
    MapaSiteComponent,
    ProdutosComponent,
    SacolaComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    ProdutoModelComponent,
    PerfilComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
