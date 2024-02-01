import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private URL ='http://localhost:3000'
  constructor(private http:HttpClient ) { }

getAllHeros():Observable<Heroes[]>{
  return this.http.get<Heroes[]>(`${this.URL}/heroes`);
}

}
