import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('hola');
    
  }
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
