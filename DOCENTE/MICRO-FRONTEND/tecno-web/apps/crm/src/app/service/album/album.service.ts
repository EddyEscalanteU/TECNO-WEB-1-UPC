import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private URL: string = 'https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5';

  constructor(private http: HttpClient) { }

  public getAlbum(){
    return this.http.get(this.URL);
  }
}
