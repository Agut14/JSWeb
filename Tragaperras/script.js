window.addEventListener("load", function(e){
    //array con el listado de nombres de las imagenes
    var listaImagenes = ["aubergine", "banana", "carrots", "cherries", "dollar", "lemon", "orange", "peach", "potato", "tomato"];

    //input "introducir"
    let introducir = document.getElementById("boton");

    //input "salir"
    let salir = document.getElementById("salir");

    //input de cantidad de monedas
    let monedas = document.getElementById("monedas");

    //div "monedero"
    let monedero = document.getElementById("monedero");

    //div "monedero" valor Number
    let monedasMonedero = Number(document.getElementById("monedero").innerHTML);

    //Historial de monedas
    let historial = document.getElementById("historial");

    //función para añadir texto al historial de movimientos
    function pintarHistorial(texto){
        let textNode = document.createTextNode(texto);
        let listItem = document.createElement("li");
        listItem.appendChild(textNode);
        historial.appendChild(listItem);
    }
    //ruta absoluta src
    var url = window.location.href;
    var arr = url.split("/");
    var urlSrc = arr[0] + "//" + arr[2];

    


    //ocultar o mostrar historial
    const mostrarOcultar = document.querySelector("#manejoHistorial");

    mostrarOcultar.addEventListener("click", function() {
    
        if(historial.classList.contains('mostrar')){
            historial.classList.add('ocultar');
            historial.classList.remove('mostrar');
            this.textContent = "Mostrar historial";
        }else {
            historial.classList.remove('ocultar');
            historial.classList.add('mostrar');
            this.textContent = "Ocultar historial";
        }
    })
    

    //función cuando haga click en input "introducir"
    introducir.addEventListener("click", function(){
        if(monedas.value > 0){
        monedasMonedero = monedas.value;
        //asigno las monedas del primer input al div contendedor de monedas
        monedero.innerHTML = monedas.value;
        //reseteo el primer input a 0 monedas
        monedas.value = 0;
        //deshabilito el botón que he pulsadpo
        this.disabled = true;
        //deshabilito el input
        monedas.disabled = true;
        //creo un elemento li, con un texto, y se lo asigno a la ul ("historial")
        pintarHistorial("Has introducido monedas.");
    }else if(monedas.value == 0) {
        alert("Debes introducir monedas!");
    }else {
        alert("Introduce un número positivo de monedas!");
    }
    })

    

    //función cuando haga click en input "salir"
    salir.addEventListener("click", function(){
        //mando alerta con las monedas que nos quedan
        alert("Has conseguido un total de " + monedero.innerHTML + " monedas"); 
        //le paso el valor que teníamos en el monedero al input
        monedas.value = monedero.innerHTML;
        //vacío monedero
        monedero.innerHTML = 0;
        //vuelvo a habilitar el primer input
        monedas.disabled = false;
        //vuelvo a habilitar el input "introducir"
        introducir.disabled = false;
         //creo un elemento li, con un texto, y se lo asigno a la ul ("historial")
        pintarHistorial("Sacas todas las monedas.");
        //reseteo las imagenes de la tragaperras
        imagen[0].src= "img/pingu.png";
        imagen[1].src= "img/pingu.png";
        imagen[2].src= "img/pingu.png";
        
    })

    //selecciono la imagen de la palanca
    let palanca = document.getElementById("palanca");
    //selecciono las demás imagenes
    let imagen = document.getElementsByTagName("img");

    

    //cuando aprieto el ratón, se cambia la imagen de la palanca
   palanca.addEventListener("mousedown", function(){
    imagen[3].src= "img/palancaDOWN.png";
   })

   //cuando levanto el dedo del click del ratón, se vuelve a cambiar la imagen de la palanca y empieza la función de la tragaperras.
   palanca.addEventListener("mouseup", function(){
    imagen[3].src= "img/palancaUP.png";
    //si no hay monedas, salta mensaje
    if(monedero.innerHTML == 0){
        alert("Por favor, introduce monedas");
        //si hay monedas, cambian las imagenes y se calcula el resultado
    }else {
        imagen[0].src = "img/" + listaImagenes[(Math.floor(Math.random()*10))] + ".png";
        imagen[1].src = "img/" + listaImagenes[(Math.floor(Math.random()*10))] + ".png";
        imagen[2].src = "img/" + listaImagenes[(Math.floor(Math.random()*10))] + ".png";

        
        
        //gasto moneda
        monedasMonedero -=1;
        monedero.innerHTML = monedasMonedero;
        console.log(monedero.innerHTML);
        pintarHistorial("Gastas una moneda");

        //estructura condicional para asignar el premio
        //si hay por lo menos una moneda..
        if(imagen[0].src == urlSrc + "/Tragaperras/img/dollar.png" || imagen[1].src == urlSrc + "/Tragaperras/img/dollar.png"
            || imagen[2].src == urlSrc + "/Tragaperras/img/dollar.png"){
                //si hay 3 monedas
            if(imagen[0].src == imagen[2].src && imagen[1].src == imagen[0].src 
            && imagen[2].src == imagen[0].src){

                monedasMonedero += 10;
                monedero.innerHTML = monedasMonedero;
                pintarHistorial("¡TRES MONEDAS! Ganas 10 monedas.");
                //si hay dos monedas
            }else if((imagen[0].src == urlSrc + "/Tragaperras/img/dollar.png" && imagen[0].src == imagen[1].src) || 
                    (imagen[0].src == urlSrc + "/Tragaperras/img/dollar.png" && imagen[0].src == imagen[2].src) || 
                    imagen[1].src == urlSrc + "/Tragaperras/img/dollar.png" && imagen[1].src == imagen[2].src){

                        monedasMonedero += 4;
                        monedero.innerHTML = monedasMonedero;
                        pintarHistorial("¡DOS MONEDAS! Ganas 4 monedas.");
                //si hay una moneda y dos frutas
            }else if((imagen[0].src == urlSrc + "/Tragaperras/img/dollar.png" && imagen[1].src == imagen[2].src) || 
                    (imagen[1].src == urlSrc + "/Tragaperras/img/dollar.png" && imagen[0].src == imagen[2].src) ||
                    imagen[2].src == urlSrc + "/Tragaperras/img/dollar.png" && imagen[0].src == imagen[1].src){

                        monedasMonedero += 3;
                        monedero.innerHTML = monedasMonedero;
                        pintarHistorial("¡UNA MONEDA Y DOS FRUTAS u HORTALIZAS! Ganas 3 monedas.");
                //si hay una moneda y nada más       
            }else {

                monedasMonedero += 1;
                monedero.innerHTML = monedasMonedero;
                pintarHistorial("¡UNA MONEDA! Ganas 1 moneda.");
            }

            
        }else 
                //si no hay ninguna moneda y hay dos frutas u hortalizas iguales
            if (((imagen[0].src == imagen[1].src) && (imagen[0].src != imagen[2].src)) 
                || ((imagen[0].src == imagen[2].src) && (imagen[0].src != imagen[1].src)) 
                || ((imagen[1].src == imagen[2].src) && (imagen[0].src != imagen[2].src))){

                        monedasMonedero += 2;
                        monedero.innerHTML = monedasMonedero;
                        pintarHistorial("¡DOS FRUTAS u HORTALIZAS! Ganas 2 monedas.");
                //si no hay ninguna moneda y las 3 frutas u hortalizas son iguales
            }else if((imagen[0].src == imagen[1].src) && (imagen[0].src == imagen[2].src) 
                && (imagen[1].src == imagen[2].src)){

            monedasMonedero += 5;
            monedero.innerHTML = monedasMonedero;
            pintarHistorial("¡TRES FRUTAS u HORTALIZAS! Ganas 5 monedas.");

            }
    } 
});

monedero.addEventListener("blur", () => {
    monedero.innerHTML = monedasMonedero;
    console.log("blur");
})
   

    
});