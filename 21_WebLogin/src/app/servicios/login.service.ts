import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly endPoint = 'http://localhost:8080/Ejercicio21/usuarios/login'

  constructor(private _httpClient : HttpClient) { 

   }

   public validado(email : String, password : String) : Observable<any>{
     let headers = new HttpHeaders();
     headers.set('content-type', 'application/x-www-form-urlencoded');
     headers.set('Access-Control-Allow-Origin', '*');
     
    return this._httpClient.get<any>(`${this.endPoint}?email=${email}&password=${password}`)


   }
}
