import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selector-colores',
  standalone: false,
  templateUrl: './selector-colores.component.html',
  styleUrl: './selector-colores.component.scss'
})
export class SelectorColoresComponent {
  @Output() colorCambiado = new EventEmitter<{color: string, nombre: string}>();

  seleccionarColor(color: string, nombre: string) {
    this.colorCambiado.emit({ color, nombre });
  }
}
