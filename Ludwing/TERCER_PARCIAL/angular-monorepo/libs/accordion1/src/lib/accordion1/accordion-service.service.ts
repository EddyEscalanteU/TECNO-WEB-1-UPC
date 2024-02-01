import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordionServiceService {


  private Url = 'https://jsonplaceholder.typicode.com/users?_start=0&_limit=7'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.Url);
  }
}
