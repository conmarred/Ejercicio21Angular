import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entidades/usuario';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  listaUsuarios : Usuario[] = []
  Usuario : Usuario | null = null

  //validaciones
  usuarioObligatorio = true
  passObligatorio = true
  passwordIncorrecta = true
  noExisteUsuario = true

  // Los videojuegos tendran un identificador, un titulo, una compañia y una valoración media.
  email:string ="";
  pass:string ="";


  constructor(private router:Router, private _loginService : LoginService){
    this._loginService= _loginService
    
  }
  public ocultarMensajesError(){
    this.usuarioObligatorio = true
    this.passObligatorio = true
  } 

  public hayErroresEnFormulario():boolean{
    let error : boolean = false
    this.ocultarMensajesError()

    if(this.email.trim().length==0){
      this.usuarioObligatorio = false
      error = true
    }
    
    if(this.pass.trim().length==0){
      this.passObligatorio = false
      error = true
    }
    return error
  }

  login(){
    
    let usuario = new Usuario(this.email, this.pass)
    if(!this.hayErroresEnFormulario()){
      let obs = this._loginService.validado(this.email, this.pass)
      obs.subscribe({
        next:  (respuesta) => {
          if(respuesta.validado){
            this.router.navigate(["/listadoVideojuegos"], {queryParams:{email : usuario.email}})
          }
        },
        error: (e) => {
          console.log(`login -> No se han podido acceder al login`)
          alert(e)
        }
      });
    
  }
  }

  ngOnInit(): void {
  }

}
