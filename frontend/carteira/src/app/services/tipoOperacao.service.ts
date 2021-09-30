import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TipoOperacao } from "../models/TipoOperacao";

@Injectable({
  providedIn: "root",
})
export class TipoOperacaoService {

  private baseURL = "https://webapicarteira.azurewebsites.net/api/tipoOperacao";
  //private baseURL = "https://localhost:44346/api/tipoOperacao";

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<TipoOperacao[]> {
    return this.http.get<TipoOperacao[]>(`${this.baseURL}`);
  }

  getTipoOperacao(id: number): Observable<TipoOperacao> {
    return this.http.get<TipoOperacao>(`${this.baseURL}/${id}`);
  }

  create(tipoOperacao: TipoOperacao): Observable<TipoOperacao> {
    return this.http.post<TipoOperacao>(`${this.baseURL}`, tipoOperacao);
  }
  update(tipoOperacao: TipoOperacao): Observable<TipoOperacao> {
    return this.http.put<TipoOperacao>(`${this.baseURL}`, tipoOperacao);
  }

  delete(id: string){
        this.http.delete(`${this.baseURL}/${id}`)
        .subscribe({
            next: data => {
                this.status = 'TipoOperacao Excluida com sucesso';
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('Ocorreu um erro ao excluir o registro!', error);
            }
        });
  }

  detalhes(id: String): Observable<TipoOperacao>{
      console.log(id);
      return this.http.get<TipoOperacao>(`${this.baseURL}/`+id);
  }

}
