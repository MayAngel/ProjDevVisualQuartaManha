import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Papel } from "../models/Papel";

@Injectable({
  providedIn: "root",
})
export class PapelService {

  private baseURL = "https://webapicarteira.azurewebsites.net/api/papel";
  //private baseURL = "https://localhost:44346/api/papel";

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<Papel[]> {
    return this.http.get<Papel[]>(`${this.baseURL}`);
  }

    create(papel: Papel): Observable<Papel> {
    return this.http.post<Papel>(`${this.baseURL}`, papel);
}
  update(papel: Papel): Observable<Papel> {
    return this.http.put<Papel>(`${this.baseURL}`, papel);
  }

  delete(id: string){
        this.http.delete(`${this.baseURL}/${id}`)
        .subscribe({
            next: data => {
                this.status = 'Papel Excluida com sucesso';
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('Ocorreu um erro ao excluir o registro!', error);
            }
        });
  }

  detalhes(id: String): Observable<Papel>{
      console.log(id);
      return this.http.get<Papel>(`${this.baseURL}/`+id);
  }

}
