import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppC';
  public fotosArray: any;

  constructor(private fotosService: FotosService ) {
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
