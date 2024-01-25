import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'angular-monorepo-filter-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.css',
})
export class FilterTableComponent {
  ngOnInit(): void {
    this.setData();  
  }
  
  title = 'AppX';
  data:any= [];
  filter="";

  changefilter(e:any){
    console.log(e);
    
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
