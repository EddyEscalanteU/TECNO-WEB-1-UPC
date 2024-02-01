import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwWelcomeComponent } from '@tecno-web-1/tw-welcome';
import { TwButtonComponent } from '@tecno-web-1/tw-button';

@Component({
  standalone: true,
  imports: [RouterModule, TwWelcomeComponent,TwButtonComponent],
  selector: 'tecno-web-1-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crm';
}
