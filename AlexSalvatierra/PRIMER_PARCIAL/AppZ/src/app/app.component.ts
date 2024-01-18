import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppZ';
  input:any;
  filter:any;
  table:any;
  tr:any;
  txtValue:any;

   myFunction() {
    // Declare variables
    
    this.input = document.getElementById("myInput");
    this.filter = this.input.value.toUpperCase();
    this.table = document.getElementById("myTable");
    this.tr = this.table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < this.tr.length; i++) {
      let td;
      td = this.tr[i].getElementsByTagName("td")[0];
      if (td) {
        this.txtValue = td.textContent || td.innerText;
        if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
          this.tr[i].style.display = "";
        } else {
          this.tr[i].style.display = "none";
        }
      }
    }
  }
}
