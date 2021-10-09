'use strict'

const carrito = [
{nombre: "Monitor de 21 pulgadas ",precio: 200},       
{nombre: "Monitor de 27 pulgadas ",precio: 300},
{nombre: "Monitor de 23 pulgadas ",precio: 700},
{nombre: "Monitor de 22 pulgadas ",precio: 1000}    
];


carrito.forEach(producto => {
    console.table(`${producto.nombre} Precio: ${producto.precio}`);
});




