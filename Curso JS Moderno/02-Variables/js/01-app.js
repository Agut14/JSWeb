'use strict'

/*let cars = {
    modelo: "volvo",
    año: 2015
}

for (var property in cars){

    console.log(`${property}: ${cars[property]}`);
}*/

/*let cars = ["gato",1,2,3,4,5,6,7,8,9];

cars.forEach(myFunction);

function myFunction(item, index){
    console.log(`${index}: ${item}`);
}*/


/*do {
    var edad = prompt("Qué edad tienes?");
     

}while(isNaN(edad) || edad < 0);


var estado = (edad >= 18) ? "Mayor de edad" : "Menor de edad";



console.log(estado);*/


/*class Thermostat {
    constructor(f){
      this.f = f;
    }
  
    get temperature(){
      return 5/9 * (this.f - 32)
    }
  
    set temperature(c){
      this.f = c * 9.0 / 5 + 32
    }
    
    }
  
  // Cambia solo el código encima de esta línea
  
  const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  let temp = thermos.temperature; // 24.44 en Celsius
  thermos.temperature = 10;
  temp = thermos.temperature; // 26 en Celsius

  console.log(thermos);*/

 var i = 2;
 var a = 1;
 var control = true;

 do{
   i*=i;
   a++;
   if(i==256){
     control = false;
   }
 }while(control)

 console.log(a);


