//Arrays
let notas: number[] = [7,8,9,10];

//Interfaz para el objeto alumno
interface Alumno {
    nombre: string;
    apellidos: string;
    edad: number;
}
//Objeto alumno 
const Alumno: Alumno = {
    nombre: 'Carlos',
    apellidos: 'Agut Vives',
    edad: 25
}

console.table( Alumno );