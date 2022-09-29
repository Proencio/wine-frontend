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
    MapaSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
