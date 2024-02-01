import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionService } from '../../accordion.service';

@Component({
  selector: 'accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  accordionArray: any[] = [];

  constructor(private accordionSvc: AccordionService) {
    this.accordionSvc.getAccordion().subscribe(res => {
      this.accordionArray = res.map(item => ({ ...item, isActive: false }));
    });
  }

  togglePanel(index: number): void {

    this.accordionArray.forEach((item, i) => {
      item.isActive = i === index ? !item.isActive : false;
    });
  }

}
