import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwButtonComponent } from '@tecno-web/tw-button';
import { TwWelcomeComponent } from '@tecno-web/tw-welcome';

@Component({
  standalone: true,
  imports: [RouterModule, TwWelcomeComponent, TwButtonComponent],
  selector: 'tecno-web-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crm';
}
