import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavbarComponent } from '@angular-monorepo/mobile-navbar';
import { FilterTableComponent } from '@angular-monorepo/filter-table';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, MobileNavbarComponent, FilterTableComponent],
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
