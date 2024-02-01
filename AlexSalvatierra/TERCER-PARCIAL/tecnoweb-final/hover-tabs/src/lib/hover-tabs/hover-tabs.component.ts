import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  title: string;
  id: string;
  content: string;
  isActive: boolean;
}

@Component({
  selector: 'hover-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hover-tabs.component.html',
  styleUrl: './hover-tabs.component.css',
})
export class HoverTabsComponent {
  tabs: Tab[] = [
    { title: 'London', id: 'London', content: 'London is the capital city of England.', isActive: false },
    { title: 'Paris', id: 'Paris', content: 'Paris is the capital of France.', isActive: false },
    { title: 'Tokyo', id: 'Tokyo', content: 'Tokyo is the capital of Japan.', isActive: false },
  ];

  openCity(tab: Tab) {
    this.resetTabs();
    tab.isActive = true;
  }

  resetTabs() {
    this.tabs.forEach(tab => tab.isActive = false);
  }
}
