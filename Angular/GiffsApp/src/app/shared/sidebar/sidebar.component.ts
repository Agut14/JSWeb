import { Component, OnInit } from '@angular/core';
import { GiffsService } from '../../giffs/service/giffs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  constructor ( private giffsService: GiffsService ) {}

  get historial (): string []{
    return this.giffsService.historial;
  }

  buscar( gif:string) {
    this.giffsService.buscarGiffs( gif );
  }

}
