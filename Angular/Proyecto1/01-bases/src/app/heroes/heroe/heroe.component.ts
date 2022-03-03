import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreMayus(): string{
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre(): void {
        if(this.nombre === 'Ironman'){
            this.nombre = 'Spiderman';
        }else {
            this.nombre = 'Ironman';
        }
    }

    cambiarEdad(): void {
        if(this.edad === 45){
            this.edad = 23;
        }else {
            this.edad = 45;
        }
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

}