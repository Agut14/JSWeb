import { Producto } from "./05-Desestructuración_Args";
import { calculaISV } from "./05-Desestructuración_Args";


const carritoCompras: Producto[] = [
    {
        desc: "Teléfono 1",
        precio: 100
    },
    {
        desc: "Teléfono 2",
        precio: 150
    }
];



const [ total, isv ] = calculaISV( carritoCompras );

console.log(`El total es: ${total} y el impuesto aplicado sobre ventas es: ${isv}`);