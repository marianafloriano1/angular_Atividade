import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponeneteSevicoService {

  //serviço que consome uma api
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  //vai retornar o site da api
  getInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
