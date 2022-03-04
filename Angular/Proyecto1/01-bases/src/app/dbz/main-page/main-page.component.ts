import { Component } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = []

  agregarNuevoPersonaje( arg: Personaje ){
    this.personajes.push( arg );
  }
}

