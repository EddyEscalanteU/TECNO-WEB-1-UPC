import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {HoverTabsComponent} from '@angular-monorepo/hover-tabs';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HoverTabsComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppB';
}
