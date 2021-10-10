'use strict'



let dniValido = /(^([0-9]{8}[A-Z]))$/;



do {
    
    var dni = prompt("DNI: ",0);

}while(!(dniValido.test(dni)));







