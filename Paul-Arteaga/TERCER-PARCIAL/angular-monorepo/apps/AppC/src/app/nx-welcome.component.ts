import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionComponent} from '@angular-monorepo/accordion';
@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, AccordionComponent, ],
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
