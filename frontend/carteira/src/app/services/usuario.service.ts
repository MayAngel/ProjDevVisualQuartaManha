import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";

@Injectable({
  providedIn: "root",
})
export class UsuarioService {

  private baseURL = "https://webapicarteira.azurewebsites.net/api/usuario";
  //private baseURL = "https://localhost:44346/api/usuario";

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/list`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}`, usuario);
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(usuario);
     // const body = { nome: usuario.nome, email: usuario.email, senha:usuario.senha,CPF:usuario.CPF };
    console.log(body)
    return this.http.post<Usuario>(this.baseURL + '/create', body,{'headers':headers})
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/${id}`);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseURL}`, usuario);
  }

  delete(id: string){
        this.http.delete(`${this.baseURL}/${id}`)
        .subscribe({
            next: data => {
                this.status = 'Delete successful';
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('Ocorreu um erro ao excluir o registro!', error);
            }
        });
  }

  detalhes(id: String): Observable<Usuario>{
      console.log(id);
      return this.http.get<Usuario>(`${this.baseURL}/`+id);
  }

}
