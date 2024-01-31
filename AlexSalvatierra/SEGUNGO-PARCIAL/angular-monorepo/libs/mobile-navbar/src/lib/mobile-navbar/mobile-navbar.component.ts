import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mobile-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css',
})
export class MobileNavbarComponent {

  myFunction() {
    var x = document.getElementById("myLinks");
    if (x!.style.display === "block") {
      x!.style.display = "none";
    } else {
      x!.style.display = "block";
    }
  }
}
