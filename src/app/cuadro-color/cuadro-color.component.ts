import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro-color',
  standalone: false,
  templateUrl: './cuadro-color.component.html',
  styleUrl: './cuadro-color.component.scss'
})
export class CuadroColorComponent {
@Input() color: string = '';
@Input() nombre: string = '';
}
