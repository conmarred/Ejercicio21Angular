import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Videojuego} from 'src/app/entidades/videojuego';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-lista-videojuegos',
  templateUrl: './lista-videojuegos.component.html',
  styleUrls: ['./lista-videojuegos.component.css']
})
export class ListaVideojuegosComponent implements OnInit {

  listaVideojuegos : Videojuego[] = []
  videojuego : Videojuego | null = null

  // Los videojuegos tendran un identificador, un titulo, una compañia y una valoración media.
  id: string = ""
  titulo: string = ""
  company: string = ""
  imagen: string = ""
  valMedia: string = ""


  constructor(private router:Router) {
    let videojuego : Videojuego = new Videojuego(1,"Mario Kart","Nintendo" ,"/assets/images/super-mario.png", 5)
    let videojuego2 : Videojuego = new Videojuego(2,"Fifa21","Xbox" ,"/assets/images/nintendo-switch.png", 4)
    let videojuego3 : Videojuego = new Videojuego(3,"Zelda","Nintendo" ,"/assets/images/zelda.png", 3)
    this.listaVideojuegos.push(videojuego);
    this.listaVideojuegos.push(videojuego2);
    this.listaVideojuegos.push(videojuego3);
   }

   public irDetalle(videojuego:Videojuego){
     this.id = videojuego.getd().toString();
     this.company=videojuego.getCompany().toString();
     this.imagen=videojuego.getImagen().toString();
     this.titulo=videojuego.getTitulo().toString();
     this.valMedia=videojuego.getValoracion().toString();
     this.router.navigate(["/detalleVideojuego", videojuego.getd(), videojuego.getTitulo(), 
     videojuego.getImagen(), videojuego.getCompany(), videojuego.getValoracion()])
   }
    ngOnInit() {
  
    }
}
