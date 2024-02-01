import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  private URL = 'https://jsonplaceholder.typicode.com/users?_start=0&_limit=3';

  constructor(private http: HttpClient) {}

  getAccordion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}`).pipe(
    
      map(data => data.map(item => ({ ...item, isActive: false })))
    );
  }

  
}
