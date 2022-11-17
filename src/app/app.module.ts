import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MapaComponent } from './components/mapa-site/mapa/mapa.component';
import { MapaSiteComponent } from './components/mapa-site/mapa-site.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
import { AddUsuarioComponent } from './components/usuarios/add-usuario/add-usuario.component';
import { AltUsuarioComponent } from './components/usuarios/alt-usuario/alt-usuario.component';
import { PerfilEmpresaComponent } from './components/empresa/perfil-empresa/perfil-empresa.component';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaSiteComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    UsuariosComponent,
    AddUsuarioComponent,
    AltUsuarioComponent,
    PerfilEmpresaComponent
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
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
