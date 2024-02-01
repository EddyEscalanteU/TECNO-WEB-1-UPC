import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private URL: string = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=2';

  constructor(private http: HttpClient,) { 
  }

  public getFotos() {
    return this.http.get(this.URL);
  }
}
