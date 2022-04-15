import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { LoginComponent } from './componentes/login/login.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { ListaVideojuegosComponent } from './componentes/lista-videojuegos/lista-videojuegos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DetalleVideojuegoComponent } from './componentes/detalle-videojuego/detalle-videojuego.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    ListaVideojuegosComponent,
    MenuComponent,
    DetalleVideojuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule//Hay que importar este modulo para hacer peticiones HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
