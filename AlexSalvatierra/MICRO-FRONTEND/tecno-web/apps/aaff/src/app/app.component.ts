import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FotosService } from './fotos/fotos.service';
import { CommonModule } from '@angular/common';
import { Heroes } from './interfaces/heroes.interface';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, RouterModule],
  selector: 'tecno-web-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  heroes:Heroes[]=[];

  constructor(private fotoSvc:FotosService){}
  ngOnInit() {
    
    this.fotoSvc.getAllHeros().subscribe(res =>{
      this.heroes=res;
      
    })

  }
}
