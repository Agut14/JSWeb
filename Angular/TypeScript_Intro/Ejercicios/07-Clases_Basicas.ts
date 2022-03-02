
class PersonaNormal {
    constructor(
        public nombre:string,
        public direccion: string){



    }
}


class Heroe extends PersonaNormal{

    constructor
    (public alterEgo: string, 
        public edad: number, 
        public nombreReal: string,
        public direccion: string)
        {

        super( nombreReal, direccion );
    }

    setEdad(edad: number){
        this.edad = edad;
    }

    getEdad(){
        return this.edad;
    }

    mostrarDatos(){
        return `${this.alterEgo} tiene ${this.edad} años y se llama ${this.nombre} y vive en ${this.direccion}.`;
    }


}

const Ironman = new Heroe("Ironman", 45, "Toni Stark", "NY");
const Spiderman = new Heroe("Spiderman", 25, "Peter Parker", "Queens");

console.log(Ironman.mostrarDatos());
console.log(Spiderman.mostrarDatos());
console.log(Spiderman);
