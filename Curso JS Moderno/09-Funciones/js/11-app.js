

 let obj1 = {nombre: "Luciano", apellido: "Nicolau"}
 let obj2 = {nombre: "Lio", segundoNombre: "Gustavo"}

 function clavesUnicas(a, b){
    const arr = [];
    Object.keys(a).map(key => !b[key] ? arr.push(key) : null);
    Object.keys(b).map(key => !a[key] ? arr.push(key) : null);

    return arr;
  }


console.log(clavesUnicas(obj1, obj2));

