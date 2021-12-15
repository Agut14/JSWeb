//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

//conjunto de even listeners
registrarEventListeners();
function registrarEventListeners(){
    //agregar curso pulsando "Agregar al carrito"
    listaCursos.addEventListener("click", agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener("click", eliminarCurso);

    //vaciar carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = [];
        limpiarCarrito();
    });

}


//Funciones
function agregarCurso (e){
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito") ){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        console.log(cursoSeleccionado);
        leerDatosCurso(cursoSeleccionado);
        
        
    }

}

function eliminarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains("borrar-curso")){
        const cursoId = e.target.getAttribute("data-id");

        //elimina del array
        
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        
        

        carritoHTML();

    }
    
}


//lee el contenido del HTML al que das click
function leerDatosCurso(curso){

    const infoCurso = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        precio: curso.querySelector("span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1,
    }

    //revisamos si un elemento existe
    duplicados(infoCurso);

    console.log(articulosCarrito);

    carritoHTML();

}


function carritoHTML(){

    //elimina los cursos del tablebody
    limpiarCarrito();

    //recorre carrito genera HTML
    articulosCarrito.forEach(curso => {
        const { imagen, nombre, precio, cantidad, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>
           <img src='${imagen}' width='100'>
        </td>
        <td>
            ${nombre}
        </td>
        <td>
            ${precio}
        </td>
        <td>
            ${cantidad}
        </td>
        <td>
            <a href='#' class='borrar-curso' data-id='${id}'>X</a>
        </td>
        `;

        //Añadir curso al contenedor Tbody
        contenedorCarrito.appendChild(row);
    })
}

function limpiarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function duplicados (elemento){
    const existe = articulosCarrito.some ( curso => curso.id === elemento.id);
    if(existe){
        //actualizo cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === elemento.id){
                curso.cantidad += 1;
                return curso;
            }else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];

    }else {
        //agregar elementos al array articulos carrito
        articulosCarrito = [...articulosCarrito, elemento];
    }
}