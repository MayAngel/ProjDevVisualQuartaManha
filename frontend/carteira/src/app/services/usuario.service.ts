import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {

<<<<<<< HEAD
  private baseURL = "https://webapicarteira.azurewebsites.net/api";
=======
   private baseURL = "https://webapicarteira.azurewebsites.net/api";

>>>>>>> 40dc1920d859be6ef1ab8e98546eab5947a01c69

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/usuario`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/usuario`, usuario);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseURL}/usuario`, usuario);
  }

  delete(usuario: Usuario){
    //return this.http.delete<Usuario>(`${this.baseURL}/usuario`, usuario);
        this.http.delete(`${this.baseURL}/usuario`)
        .subscribe({
            next: data => {
                this.status = 'Delete successful';
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
        });
  }
}
