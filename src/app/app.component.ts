import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Moyete';
  textoPlaceholder = 'Escriba aquí';
  desabilitado = true;
  imgAngular = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
  texto = 'Que tal estoy en Udemy';

  listaEstudiante: any[] = [
    { nombre: 'Moy Rub', estado: 'Promocionado' },
    { nombre: 'Anibal Rub', estado: 'Regular' },
    { nombre: 'Ana tercera', estado: 'Promocionado' },
  ]

  getSuma(a: number, b: number) {
    return a + b;
  }

  cambiarTexto(): void {
    this.texto = 'Hola, a cambiado...';
  }

  constructor() {
    //setInterval(() => (this.nombre = 'Rubio'), 3000);
    setInterval(() => (this.desabilitado = false), 3000);
  }
}
