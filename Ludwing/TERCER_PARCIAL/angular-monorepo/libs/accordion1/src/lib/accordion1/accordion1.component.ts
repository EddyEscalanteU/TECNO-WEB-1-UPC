import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionServiceService } from './accordion-service.service';
@Component({
  selector: 'angular-monorepo-accordion1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion1.component.html',
  styleUrl: './accordion1.component.css',
})
export class Accordion1Component {
  public datoLista: any;

  constructor(private accordionService: AccordionServiceService) {}

  ngOnInit(): void {
    this.getDatos();
    console.log(this.datoLista)
  }

  public getDatos(): void {
    this.accordionService.getUsers().subscribe(data => {
      this.datoLista = data
    });
    console.log(this.datoLista)
  }


  public togglePanel(section: { active: boolean; }): void {
    section.active = !section.active;
  }
  
}
