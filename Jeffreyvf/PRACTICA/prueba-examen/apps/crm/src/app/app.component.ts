import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwWelcomeComponent } from '@prueba-examen/tw-welcome';
import { TwButtonComponent}  from '@prueba-examen/tw-button';
 
@Component({
  standalone: true,
  imports: [ RouterModule, TwWelcomeComponent,TwButtonComponent],
  selector: 'prueba-examen-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crm';
}
