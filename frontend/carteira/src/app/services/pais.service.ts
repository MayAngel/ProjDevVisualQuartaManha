import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pais } from "../models/Pais";

@Injectable({
  providedIn: "root",
})
export class PaisService {

  private baseURL = "https://webapicarteira.azurewebsites.net/api/pais";
  //private baseURL = "https://localhost:44346/api/pais";

  private status = "";

  private errorMessage = "";

  constructor(private http: HttpClient) { }

  list(): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.baseURL}`);
  }


    create(pais: Pais): Observable<Pais> {
    return this.http.post<Pais>(`${this.baseURL}`, pais);
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(pais);
    console.log(body)
    return this.http.post<Pais>(this.baseURL, body,{'headers':headers})
  }

  update(pais: Pais): Observable<Pais> {
    return this.http.put<Pais>(`${this.baseURL}`, pais);
  }

  delete(id: string){
        this.http.delete(`${this.baseURL}/${id}`)
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

  detalhes(id: String): Observable<Pais>{
      console.log(id);
      return this.http.get<Pais>(`${this.baseURL}/`+id);
  }

}