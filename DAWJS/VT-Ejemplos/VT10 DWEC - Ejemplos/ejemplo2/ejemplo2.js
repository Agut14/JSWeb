$("button").click(function(){
		
		$.get("https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json", function(datos){
			console.log(datos);

			var listaEventos = datos["@graph"];

			for (var i = 0; i < listaEventos.length; i++) {
				$("p").append("<li><a href='" + listaEventos[i]["link"] + "'>"+ listaEventos[i]["title"] + "</a></li>");
			}

		});
});
