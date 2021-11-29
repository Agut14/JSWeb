

function compruebaQueEs() {
	const userTwitter = /^@{1}(\w){1,15}$/g;

	if (userTwitter.test(entrada.value)) {
		alert("Es un usuario de Twitter");
	} else {
		alert("No lo es");
	}
}


function buscaCorreosElectronicosValidos(){
	const correo = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/g;

	//correos = correo.exec(area.value);

	//console.log(correos);



	// Vamos ejecutando cada vez la búsqueda hasta que devuelva null, que habrá terminado.
	while ((correos = correo.exec(area.value)) && (correos != null)) {
		salida.innerHTML += correos[0] + "<br>";

	}
	
	
}


botonEnviar.addEventListener("click", compruebaQueEs, false);

botonArea.addEventListener("click", buscaCorreosElectronicosValidos, false);