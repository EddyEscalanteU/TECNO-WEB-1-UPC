import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FotosService } from './servicios/fotos/fotos.service';
import { CommonModule } from '@angular/common';
import { TwButtonComponent } from '@tecno-web/tw-button';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule, TwButtonComponent, FormsModule],
  selector: 'tecno-web-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aaff';
  formulario: FormGroup;
  public arrayFotos : any
  formData = {
    name: '',
    // correo: '',
  };

  constructor(private pruebaServicio : FotosService, private fb: FormBuilder) {
    this.arrayFotos = this.pruebaServicio.getFotos(); // llamada al archivo del servicio
    console.log(this.arrayFotos)
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      // correo: ['', [Validators.required, Validators.email]],
   });
  } // nombre del servicio

  

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    fetch('http://localhost:3000/profile', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.formData)
  });

  }
}

