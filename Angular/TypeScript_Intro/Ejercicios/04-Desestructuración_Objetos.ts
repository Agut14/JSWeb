//Desestructuración objetos

interface Reproductor {
    volumen: number;
    segundo:number;
    cancion: string;
    detalles: Detalles;

    
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Living",
    detalles: {
        autor: "Yo",
        anio: 2022
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log("El volumen actual: ", volumen);
console.log("El segundo actual: ", segundo);
console.log("El canción actual: ", cancion);
console.log("El autor actual: ", autor);

//Desestructuración arrays

const dbz: string[] = ["Goku", "Vegetta", "Trunks"];
const [ goku, vegetta, trunks ] = dbz;

console.log("Personaje de DBZ: ", goku);
console.log("Personaje de DBZ: ", vegetta);
console.log("Personaje de DBZ: ", trunks);
