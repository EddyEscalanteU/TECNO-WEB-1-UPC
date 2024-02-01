import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwWlcomeComponent } from '@angular-monorepo/tw-wlcome';
import { HoverTabsComponent } from '@angular-monorepo/hover-tabs';

@Component({
  standalone: true,
  imports: [TwWlcomeComponent, RouterModule, HoverTabsComponent],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppB';
}
