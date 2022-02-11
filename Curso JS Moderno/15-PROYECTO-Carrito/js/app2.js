//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = [];

registroListeners();

function registroListeners(){
    listaCursos.addEventListener("click", añadirCurso);
    carrito.addEventListener("click", borrarCurso);
    vaciarCarritoBtn.addEventListener("click", function(){
        articulosCarrito = [];
        limpiarCarrito();
    })
}

function añadirCurso(e){
    e.preventDefault();

    if(e.target.classList.contains("agregar-carrito")){
        let cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
        console.log(articulosCarrito);
    }
}

function borrarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains("borrar-curso")){
        let dataId = e.target.getAttribute("data-id");

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== dataId);

        pintarDatosHTML();
    }
}



function leerDatosCurso(curso){
   

    let infoCurso = {
        imagen: curso.querySelector("img").src,
        nombre: curso.querySelector("h4").textContent,
        precio: curso.querySelector("span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    }

    duplicados(infoCurso);
    pintarDatosHTML();
}

function pintarDatosHTML(){

    limpiarCarrito();

    articulosCarrito.forEach(curso => {
        const { imagen, nombre, cantidad, precio, id } = curso;

        let row = document.createElement("tr");
        row.innerHTML = `
        <td><img src='${imagen}' alt='imagen' width='100'/></td>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td><a href='#' class='borrar-curso' data-id='${id}'>X</a></td>
        `

        contenedorCarrito.appendChild(row);
    })
}

function limpiarCarrito(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function duplicados(elemento){
    const existe = articulosCarrito.some(curso => curso.id === elemento.id);

    if(existe){
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === elemento.id){
                curso.cantidad +=1;
                return curso;
            }else {
                return curso;
            }
        })
        articulosCarrito = [...cursos];
    }else {
        articulosCarrito = [...articulosCarrito, elemento];
    }

}


