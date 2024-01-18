import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppY';


   myFunction() {
    var x = document.getElementById("myLinks");
    if (x!.style.display === "block") {
      x!.style.display = "none";
    } else {
      x!.style.display = "block";
    }
  }

}
