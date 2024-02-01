import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioWeb1Service {
  private URL: string = 'https://jsonplaceholder.typicode.com/users?_start=0&_limit=7'

  constructor(private http: HttpClient,) {

   }
   public getServicioWeb(){

    return this.http.get(this.URL);
   }


}
