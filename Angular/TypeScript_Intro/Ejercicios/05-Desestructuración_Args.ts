export interface Producto {
    desc: string,
    precio: number
}


const telefono: Producto = {
    desc: "Xiaomi Redmi",
    precio: 250

}

const tablet: Producto = {
    desc: "Iphone 12",
    precio: 1000
}


export function calculaISV( productos: Producto[] ): [number, number]{
    let total = 0;
    productos.forEach(({ precio }) => {
        total+= precio;
    })
    return [total ,total * 0.15];
}


let arr: Producto[] = [ telefono, tablet ];

const [ total, isv ] = calculaISV(arr);

console.log(`El total es: ${total} y el impuesto aplicado sobre ventas es: ${isv}`);