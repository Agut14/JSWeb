import { Component } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = []

  nuevoPersonaje:Personaje = {
    nombre: '',
    poder: 0
  }
  agregar(){
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      return;
    }else {
      this.personajes.push(this.nuevoPersonaje);
      this.nuevoPersonaje = {
        nombre: '',
        poder: 0
      }
    }
    console.log(this.personajes);
  
  }
}

