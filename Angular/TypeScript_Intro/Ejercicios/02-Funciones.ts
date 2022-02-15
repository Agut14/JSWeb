
//Sintaxis de funciones
function sumar (a:number, b:number): number {
    return a + b;
}
//Función de tipo flecha
const sumarFlecha = (a:number,b:number): number =>{
    return a + b;
}
//Función con argumento opcional mediante el signo ?
function multiplicar(numero:number,base:number, otroNumero?:number ):number{
    return numero * base;
}
//Funciones con objetos como argumentos
interface personaje {
    nombre: string;
    hp: number;
    mostrarHp: () => void;
        
}

function curar ( personaje: personaje, curar: number): void{

    personaje.hp += curar;
}

//Instanciamos un nuevo personaje
const nuevoPersonaje: personaje = {
    nombre: 'Sova',
    hp: 50,
    mostrarHp() {
        console.log(this.hp); 
    }
}

curar(nuevoPersonaje, 50);

nuevoPersonaje.mostrarHp();
