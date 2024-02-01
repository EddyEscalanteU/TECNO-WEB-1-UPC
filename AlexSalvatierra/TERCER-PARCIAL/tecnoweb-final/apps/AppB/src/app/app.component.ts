import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HoverTabsComponent } from '../../../../hover-tabs/src/lib/hover-tabs/hover-tabs.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HoverTabsComponent],
  selector: 'tecnoweb-final-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppB';
}
