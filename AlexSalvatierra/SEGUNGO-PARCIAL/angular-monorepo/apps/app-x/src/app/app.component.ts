import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MegaMenuComponent } from '@angular-monorepo/mega-menu';
import { FilterTableComponent } from '@angular-monorepo/filter-table';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,MegaMenuComponent,FilterTableComponent ],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-x';
}
