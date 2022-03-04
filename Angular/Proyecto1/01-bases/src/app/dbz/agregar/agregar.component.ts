import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor ( private dbzService: DbzService ) {}
  

  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

    agregar(){
    if(this.nuevoPersonaje.nombre.trim().length === 0){
      return;
    }else {
      //this.onNewCharacter.emit( this.nuevoPersonaje );
      this.dbzService.agregarPersonaje( this.nuevoPersonaje );
      this.nuevoPersonaje = {
        nombre: '',
        poder: 0
      }
    }
  }
}
