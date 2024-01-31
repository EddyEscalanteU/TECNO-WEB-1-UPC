import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FotosService } from './servicios/fotos/fotos.service';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'prueba-examen-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aaff';

  public fotosArray: any;

  constructor(private fotosService: FotosService ){
    console.log('AppComponent constructor');
    this.getfotos;
  }

  public getfotos(){
    this.fotosService.getFotos()
    .subscribe((data) => {
      console.log(data);
      this.fotosArray = data;
    } )
  }

}



