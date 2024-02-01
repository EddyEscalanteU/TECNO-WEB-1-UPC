import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  private URL = "http://localhost:3000/aaff" // de donde se traera la info
  data: any;

  constructor(private prueba: HttpClient) { } // se declara la variable para realizar la peticion get/post/put/delete

  public getFotos(){
    //JS
    //const respuesta = await fetch(this.URL) // promesa (async await)
    //console.log(respuesta.json())
    
    //TS
    this.prueba.get(this.URL).subscribe((respuesta) => {
      this.data = respuesta;
    })
    return this.data;
  }
}
