import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccordionServiceService {

  private URL: string = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4';

  constructor(private http: HttpClient,) { 
  }

  public getDatos() {
    return this.http.get(this.URL);
  }
}