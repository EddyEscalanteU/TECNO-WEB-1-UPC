import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any;

@Component({
  selector: 'curtain-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curtain-menu.component.html',
  styleUrls: ['./curtain-menu.component.css'], // Corrected property name
})
export class CurtainMenuComponent {
 
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  openNav() {
    const myNavElement = this.elRef.nativeElement.querySelector('#myNav');
    if (myNavElement) {
      this.renderer.setStyle(myNavElement, 'width', '100%');
    }
  }

  closeNav() {
    const myNavElement = this.elRef.nativeElement.querySelector('#myNav');
    if (myNavElement) {
      this.renderer.setStyle(myNavElement, 'width', '0%');
    }
  }
}
