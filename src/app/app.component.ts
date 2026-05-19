import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'colores';
  colorActual: string = '#E5E7EB';
  nombreColor: string = 'Gris';

  actualizarcolor(evento: {color: string, nombre: string}) {
    this.colorActual = evento.color;
    this.nombreColor = evento.nombre;
  }
}
