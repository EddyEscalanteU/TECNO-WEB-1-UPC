import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwWlcomeComponent } from '@angular-monorepo/tw-wlcome';
import { AccordionComponent } from '@angular-monorepo/accordion';
import { ServicioWeb1Service } from './servicios/servicio-web1.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, TwWlcomeComponent, AccordionComponent, CommonModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppC';

  public  ServicioArray: any;

  constructor(private servicioweb: ServicioWeb1Service )  {
    console.log('AppComponent Constructor 123');
    this.getServicioWeb();

  }

 public getServicioWeb (){
    this.servicioweb.getServicioWeb()
    .subscribe ((data) => {
      console.log(data);
      this.ServicioArray = data;
    } );


  }
}
