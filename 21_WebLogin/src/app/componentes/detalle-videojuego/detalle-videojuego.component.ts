import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaVideojuegosComponent } from '../lista-videojuegos/lista-videojuegos.component';

@Component({
  selector: 'app-detalle-videojuego',
  templateUrl: './detalle-videojuego.component.html',
  styleUrls: ['./detalle-videojuego.component.css']
})
export class DetalleVideojuegoComponent  {
  
  id: string = ""
  titulo: string = ""
  imagen: string =""
  valoracion: string =""
  company:string=""

  constructor(route:ActivatedRoute) {
    this.id = route.snapshot.params["id"]
    this.titulo = route.snapshot.params["titulo"]
    this.imagen = route.snapshot.params["imagen"]
    this.valoracion = route.snapshot.params["valoracion"]
    this.company = route.snapshot.params["company"]
   }

  ngOnInit() {
  }

}
