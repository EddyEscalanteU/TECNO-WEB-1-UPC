import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {Accordion1Component} from '@angular-monorepo/accordion1';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, Accordion1Component],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'appC';
}
