import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MobileNavbarComponent } from '@angular-monorepo/mobile-navbar';
import { FilterTableComponent } from '@angular-monorepo/filter-table';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,MobileNavbarComponent,FilterTableComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppY';
}
