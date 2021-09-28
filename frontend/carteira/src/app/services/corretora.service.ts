import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Corretora } from "../models/Corretora";

@Injectable({
  providedIn: "root",
})
export class CorretoraService {

  private baseURL = "https://webapicarteira.azurewebsites.net/api/corretora";
  //private baseURL = "https://localhost:44346/api/corretora";

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<Corretora[]> {
    return this.http.get<Corretora[]>(`${this.baseURL}`);
  }

  create(corretora: Corretora): Observable<Corretora> {
    console.log(corretora);
    return this.http.post<Corretora>(`${this.baseURL}`, corretora);
}
  update(corretora: Corretora): Observable<Corretora> {
    return this.http.put<Corretora>(`${this.baseURL}`, corretora);
  }

  delete(id: string){
        this.http.delete(`${this.baseURL}/${id}`)
        .subscribe({
            next: data => {
                this.status = 'Corretora Excluida com sucesso';
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('Ocorreu um erro ao excluir o registro!', error);
            }
        });
  }

  detalhes(id: String): Observable<Corretora>{
      console.log(id);
      return this.http.get<Corretora>(`${this.baseURL}/`+id);
  }

}
