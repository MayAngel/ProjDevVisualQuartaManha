import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria } from "../models/Categoria";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {

  private baseURL = "http://localhost:5000/api/categoria";
  //private baseURL = "https://localhost:44346/api/categoria";

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseURL}`);
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseURL}/${id}`);
  }

  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.baseURL}/create`, categoria);
  }
  update(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.baseURL}`, categoria);
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

  detalhes(id: String): Observable<Categoria>{
      console.log(id);
      return this.http.get<Categoria>(`${this.baseURL}/`+id);
  }

}
