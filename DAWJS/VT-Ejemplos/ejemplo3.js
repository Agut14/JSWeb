var listaTemas = ["_jaMrkUNPaU", "sxf821vFHLg", "tY8nZjPxN14", "i6g3S5tI8aY"];


function enlaceYouTube(codigo) {
	return "https://www.youtube.com/watch?v=" + codigo;
}

// Clase para manejar enlaces, artistas y códigos.
class enlaceCancion {
	constructor(contenido, codigo) {
		this.contenido = contenido;
		this.codigo = codigo;
		this.enlace = enlaceYouTube(this.codigo);
	}

	convierteAEnlace(posicion) {
		return "<a id='" + posicion + "' target='_blank' href='" +  this.enlace + "'>" + this.contenido + "</a>";
	}

	get convierteAImagen() {
		return "img/" + this.contenido + ".jpg";
	}
}


function convertirAEnlaces() {
	let listaElementos = document.getElementsByTagName("li");
	for (var i = 0; i < listaElementos.length; i++) {

		// Creamos un objeto para poder usas sus métodos.
		let elementoNuevo = new enlaceCancion(listaElementos[i].innerHTML, listaTemas[i]);
		listaElementos[i].innerHTML = elementoNuevo.convierteAEnlace(i);

		// Sacamos el valor que debe tener la imagen y hacemos que aparezca al hacer mouseover
		let valorImagen = elementoNuevo.convierteAImagen;
		listaElementos[i].addEventListener("mouseover", function() {
															document.getElementsByTagName("img")[0].src = valorImagen;
														}, false);	
	}

	// "Elimino" el botón PULSAME.
	document.getElementById("pulsa").innerHTML = "";
}


// Añade la funcionalidad al pulsar el enlace.
var botonPulsame = document.getElementsByTagName('a')[0];
botonPulsame.addEventListener("click", convertirAEnlaces, false);

// Añade la funcionalidad al final de cargar toda la página
// window.addEventListener("load", convertirAEnlaces, false);