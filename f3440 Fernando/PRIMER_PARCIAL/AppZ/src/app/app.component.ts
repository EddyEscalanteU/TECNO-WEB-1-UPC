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
    this.setData();  
  }
  
  title = 'AppZ';
  data:any= [];
  filter="";

  changefilter(e:any){
    
    if(e.target.value==="")
    {
      this.setData();
    }else{
    const dataNew= this.data.filter((p:any)=>p.name.includes(e.target.value))
    console.log(dataNew);
    this.data=dataNew
    }
  }
  setData(){
    this.data=[{name:"Alfreds Futter",
    country:"Germany"},
    {name:"Bergnlunds snabbkop",
      country:"UK"
    },
    {
      name:"Island Trading",
      country:"Germany"
    }
  ];
  }
}
