import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Operacao } from "../models/Operacao";

@Injectable({
  providedIn: "root",
})
export class OperacaoService {

  private baseURL = "http://localhost:5000/api/categoria/operacao";
  //private baseURL = "https://localhost:44346/api/operacao";

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<Operacao[]> {
    return this.http.get<Operacao[]>(`${this.baseURL}`);
  }

  listOperacoesUsuario(id: string): Observable<Operacao[]> {
    return this.http.get<Operacao[]>(`${this.baseURL}/${id}`);
  }

  getOperacao(id: number): Observable<Operacao> {
    return this.http.get<Operacao>(`${this.baseURL}/${id}`);
  }

  create(operacao: Operacao): Observable<Operacao> {
    return this.http.post<Operacao>(`${this.baseURL}`, operacao);
  }
  update(operacao: Operacao): Observable<Operacao> {
    return this.http.put<Operacao>(`${this.baseURL}`, operacao);
  }

  delete(id: string) {
    this.http.delete(`${this.baseURL}/${id}`)
      .subscribe({
        next: data => {
          this.status = 'Operacao Excluida com sucesso';
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('Ocorreu um erro ao excluir o registro!', error);
        }
      });
  }

  detalhes(id: String): Observable<Operacao> {
    console.log(id);
    return this.http.get<Operacao>(`${this.baseURL}/` + id);
  }

}
