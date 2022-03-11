import { Component, Input } from '@angular/core';
import { Capital } from '../../interfaces/porCapital.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styles: [
  ]
})
export class CapitalTablaComponent {

  @Input() capitales: Capital[] = [];

  constructor() { }

}
