import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SearchBarComponent } from '@tecnoweb-final/search-bar';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SearchBarComponent ],
  selector: 'tecnoweb-final-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-a';
}
