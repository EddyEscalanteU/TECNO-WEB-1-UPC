import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL: string = 'https://jsonplaceholder.typicode.com/users?_start=0&_limit=2';

  constructor(private http:HttpClient){
   }

   public getUsuarios(){
    return this.http.get(this.URL);
   }
}
