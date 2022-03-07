import { Component } from '@angular/core';
import { GiffsService } from '../service/giffs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  constructor( private giffsService: GiffsService) { }

  get resultados() {
    return this.giffsService.resultados;
  }

}
