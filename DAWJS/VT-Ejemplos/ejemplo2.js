function esPar(valor) {
	if ((valor % 2) == 0) {
		return true;
	}
	else {
		return false;
	}
}


function cambiaFondo() {
	if (esPar(Number(this.innerHTML))) {
		this.style.backgroundColor = "red";
	}
}


function crearElemento() {
	var lista = document.getElementsByTagName('ul')[0];
	var aleatorio = Math.round(Math.random() * 10);
	lista.innerHTML += "<li>" + aleatorio + "</li>"; 

	// Se aplica a todos los elementos creados hasta el momento.
	
	var listaElementos = document.getElementsByTagName("li");

	

	for (var i = 0; i < listaElementos.length; i++) {
		listaElementos[i].addEventListener("mouseover", cambiaFondo, false);
	}
	
	
	// Solo se aplica al último elemento creado
	/*
	var listaElementos = document.getElementsByTagName("li");
	var elementoCreado = listaElementos[listaElementos.length - 1];

	elementoCreado.addEventListener("mouseover", cambiaFondo, false);
	*/
}

function borrarLista(){
	document.getElementsByTagName('ul')[0].innerHTML = "";
}


document.getElementsByTagName('button')[0].addEventListener("click", crearElemento, false);
document.getElementsByTagName('button')[0].addEventListener("keydown", borrarLista, false);





