import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwWlcomeComponent } from '@angular-monorepo/tw-wlcome';
import { AccordionComponent } from '@angular-monorepo/accordion';
//import { FotosServicios } from './servicios/servicio-web1.service';//

@Component({
  standalone: true,
  imports: [RouterModule, TwWlcomeComponent, AccordionComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppC';

 // public  ServicioArray: ary[] = [];

 // constructor(private fotoServicio: FotosServicios )  {
 //   console.log('AppComponent Constructor 123');
 //   this.getServicios();

//  }

 // public getServicios (){
 //   this.fotoServicio.getServicios()
 //   .subscribe ((data) => {
   //   console.log(data);
   //   this.ServicioArray = data;
  //  } );


  }
//}
