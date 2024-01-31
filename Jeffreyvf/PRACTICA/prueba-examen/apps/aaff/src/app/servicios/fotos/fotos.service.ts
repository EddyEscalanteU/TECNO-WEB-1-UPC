import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private URL: string = 'https://jsonplaceholder.typicode.com/photos?star=0&_limit=2';
  http: any;

  constructor(private htpp: HttpClient,) { 
  }

  public getFotos(){
    return this.http.get(this.URL);
  }
}
