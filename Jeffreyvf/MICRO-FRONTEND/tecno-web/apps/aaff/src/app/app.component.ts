import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FotosService } from './servicios/fotos/fotos.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'tecno-web-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aaff';

  public fotosArray: any;

  constructor(private fotosService: FotosService) {
    console.log('AppComponent constructor 123');
    this.getFotosWebService();
  }

  public getFotosWebService() {
    this.fotosService.getFotos()
    .subscribe((data) => {
      console.log(data);
      this.fotosArray = data;
    });
  }

}
