
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
){
    return class extends constructor {
        miPropiedad = "New Property";
        hello = "Override";
    };
}

@classDecorator
class miSuperClase{
    public miPropiedad: string = "ABCD";

    imprimir(){
        console.log("Hola Mundo");
    }
}



console.log(miSuperClase);