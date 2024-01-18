import { Component, ngOnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements ngOnInit {
  title = 'AppZ';
  data= [{name:"Alfreds Futter",
          country:"Germany"},
          {name:"Pepe Perez",
          country:"Bolivia"}];
  filter="";

  changefilter(e:any){
    console.log(e);

  }
}
