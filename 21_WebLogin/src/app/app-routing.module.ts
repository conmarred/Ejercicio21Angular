import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { DetalleVideojuegoComponent } from './componentes/detalle-videojuego/detalle-videojuego.component';
import { ListaVideojuegosComponent } from './componentes/lista-videojuegos/lista-videojuegos.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
{
  path : '', //Por defecto se mostrará el login
  component : LoginComponent
},

{
  path : 'listadoVideojuegos', 
  component : ListaVideojuegosComponent
},
{
  path : 'detalleVideojuego/:id/:titulo/:imagen/:company/:valoracion', 
  component : DetalleVideojuegoComponent
},

{
  path : 'login', 
  component : LoginComponent
},

{
  path : 'contacto', 
  component : ContactoComponent
},

{
  path : 'sobreNosotros', 
  component : SobreNosotrosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
