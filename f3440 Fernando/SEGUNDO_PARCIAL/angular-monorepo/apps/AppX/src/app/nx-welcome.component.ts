import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterTableComponent} from '@angular-monorepo/filter-table'

@Component({
  selector: 'angular-monorepo-nx-welcome',
  standalone: true,
  imports: [CommonModule, FilterTableComponent],
  template: `
  <style>
  /* Navbar container */
  .navbar {
      overflow: hidden;
      background-color: #333;
      font-family: Arial;
    }
    
    /* Links inside the navbar */
    .navbar a {
      float: left;
      font-size: 16px;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    /* The dropdown container */
    .dropdown {
      float: left;
      overflow: hidden;
    }
    
    /* Dropdown button */
    .dropdown .dropbtn {
      font-size: 16px;
      border: none;
      outline: none;
      color: white;
      padding: 14px 16px;
      background-color: inherit;
      font: inherit; /* Important for vertical align on mobile phones */
      margin: 0; /* Important for vertical align on mobile phones */
    }
    
    /* Add a red background color to navbar links on hover */
    .navbar a:hover, .dropdown:hover .dropbtn {
      background-color: red;
    }
    
    /* Dropdown content (hidden by default) */
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      width: 100%;
      left: 0;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
    
    /* Mega Menu header, if needed */
    .dropdown-content .header {
      background: red;
      padding: 16px;
      color: white;
    }
    
    /* Show the dropdown menu on hover */
    .dropdown:hover .dropdown-content {
      display: block;
    }
    
    /* Create three equal columns that floats next to each other */
    .column {
      float: left;
      width: 33.33%;
      padding: 10px;
      background-color: #ccc;
      height: 250px;
    }
    
    /* Style links inside the columns */
    .column a {
      float: none;
      color: black;
      padding: 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }
    
    /* Add a background color on hover */
    .column a:hover {
      background-color: #ddd;
    }
    
    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      clear: both;
    }
</style>
  <div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <div class="header">
        <h2>Mega Menu</h2>
      </div>
      <div class="row">
        <div class="column">
          <h3>Category 1</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Category 2</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="column">
          <h3>Category 3</h3>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </div>
</div>
<angular-monorepo-filter-table></angular-monorepo-filter-table>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
