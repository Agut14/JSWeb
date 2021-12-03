

function ejecuta(valor) {
	var xhr = new XMLHttpRequest();
	var recibido = "";

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			recibido = xhr.responseText;
			resultado.innerHTML = recibido;
		}
	}

	xhr.open("GET", "ejemplo.php?busca=" + valor, true);
	xhr.send();
}



opciones.addEventListener("change", function() {
										ejecuta(this.value);
							}, true);


