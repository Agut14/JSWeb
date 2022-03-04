import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }
  
    constructor(){
        
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push( personaje );
    }


}