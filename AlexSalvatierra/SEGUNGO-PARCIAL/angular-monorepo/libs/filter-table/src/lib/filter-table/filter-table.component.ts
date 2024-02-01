import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.css',
})
export class FilterTableComponent {

  searchInput: string = '';
  rows: any[] = [
    { name: 'Alfreds Futterkiste', country: 'Germany' },
    { name: 'Berglunds snabbkop', country: 'Sweden' },
    { name: 'Island Trading', country: 'UK' },
    { name: 'Koniglich Essen', country: 'Germany' },
  ];

  filteredRows: any[];

  constructor() {
    this.filteredRows = [...this.rows];
  }

  filterTable() {
    this.filteredRows = this.rows.filter(row => {
      return (
        row.name.toUpperCase().includes(this.searchInput.toUpperCase()) ||
        row.country.toUpperCase().includes(this.searchInput.toUpperCase())
      );
    });
  }
}


