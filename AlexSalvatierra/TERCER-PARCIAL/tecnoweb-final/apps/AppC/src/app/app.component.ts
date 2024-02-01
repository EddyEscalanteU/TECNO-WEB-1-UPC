import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AccordionComponent } from '@tecnoweb-final/accordion';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,AccordionComponent],
  selector: 'tecnoweb-final-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppC';
}
