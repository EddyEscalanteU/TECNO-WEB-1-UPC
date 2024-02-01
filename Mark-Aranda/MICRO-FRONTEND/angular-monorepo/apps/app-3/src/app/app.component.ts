import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
/*import { UsuariosService } from './servicios/user/usuarios.service';
import { AnyARecord } from 'dns';*/

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'angular-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-3';

  /*public usuarioArray:AnyARecord[] = [];

  constructor(private usuarioService: UsuariosService) {
    console.log('AppComponent constructor 123');
    this.getUsuarios();

  }

  public getUsuarios() {
    this.usuarioService.getUsuarios()
    .subscribe((data)=> {
    console.log(data);

    /*this.usuarioArray = data;

  });
  }*/
}
