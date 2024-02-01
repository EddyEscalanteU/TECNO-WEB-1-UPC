import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwWlcomeComponent } from '@angular-monorepo/tw-wlcome';
import { SearchBarComponent } from '@angular-monorepo/search-bar';

@Component({
  standalone: true,
  imports: [ RouterModule, TwWlcomeComponent, SearchBarComponent ],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppA';
}
