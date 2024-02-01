import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccordionServiceService {

  private URL: string = 'https://jsonplaceholder.typicode.com/users?_start=0&_limit=7';

  constructor(private http: HttpClient,) { 
  }

  public getDatos() {
    return this.http.get(this.URL);
  }
}