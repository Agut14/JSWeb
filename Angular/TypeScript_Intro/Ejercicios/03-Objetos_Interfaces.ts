interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string,
    pais:string,
    ciudad:string
}

const superheroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 25,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais; 
    }
}

const direccion = superheroe.mostrarDireccion();
console.log(direccion);