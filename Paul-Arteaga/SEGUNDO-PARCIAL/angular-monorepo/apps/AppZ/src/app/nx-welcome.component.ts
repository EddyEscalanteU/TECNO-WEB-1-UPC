import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurtainMenuComponent } from '@angular-monorepo/curtain-menu';
import { FilterTableComponent } from '@angular-monorepo/filter-table';

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, CurtainMenuComponent, FilterTableComponent],
  templateUrl: './nx-welcome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
