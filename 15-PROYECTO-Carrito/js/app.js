//variables

const carrito = document.querySelector('#carrito');

const listCursos = document.querySelector('#lista-cursos');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

const vaciarCarrito =document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

cargarEventListeners();
//funciones 
function cargarEventListeners(){
    
//cuando agregas un cursi al presiona agregar al carroto
    listCursos.addEventListener('click',agregarCurso);
//eliminar un curso del carrito    
    carrito.addEventListener('click',eliminarCurso);


    //vaciar el carrito
    vaciarCarrito.addEventListener('click',()=>{
articulosCarrito = [];
limpiarHtml();


        console.log('vaciar')
    })
}

function agregarCurso(e){

    //
    e.preventDefault();
    
   if (e.target.classList.contains('agregar-carrito')) {

const selecionCurso = e.target.parentElement.parentElement;

leerDatosCurso(selecionCurso);}
    
  
}

///leer contenido y extrea informacion

function leerDatosCurso(curso){
//console.log(curso);

//crear un objrto con el curso
const infoCurso={
    imagen : curso.querySelector('img').src,
    titulo :curso.querySelector('h4').textContent,
    precio : curso.querySelector('.precio span').textContent,
    id :curso.querySelector('a').getAttribute('data-id'),
    cantidad :1
}
//revisar si ya existe el elemento en el carrito

const existe = articulosCarrito.some(curso => curso.id===infoCurso.id);
console.log(existe);
if (existe) {//actualizar la cantida
    const cursos = articulosCarrito.map(curso=>{
        if (curso.id === infoCurso.id) {
            curso.cantidad++;
            return curso;///retorna el obeto actualizado
        }else{
            return curso;}
    })
  articulosCarrito = [...cursos];  
} else {//agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito,infoCurso]
}

//agregar elemntos al carrito de array

//articulosCarrito = [...articulosCarrito,infoCurso];//duplicado




console.log(articulosCarrito);
carritoHtml();

}

//muestrar carrito en barra

function carritoHtml(){
    //limpiar el html

limpiarHtml();

    //recorre y genera


    articulosCarrito.forEach((curso)=>{
        const{imagen,titulo,precio,cantidad,id}=curso
        const row = document.createElement('tr');
        row.innerHTML =`
        <td>
        <img src="${imagen}" width="100">
        <td>
        <td>
        ${titulo}
        <td>
        <td>
        ${precio}
        <td>
         <td>
         ${cantidad}
         <td> 
         <td> 
         <a href="#" class="borrar-curso" data-id="${id}" >x </a>
         <td>`;

        //agrega el html del carrito
        contenedorCarrito.appendChild(row);
    })
}

//eliminar los curso del tbody

function limpiarHtml(){
//forma lenta
    //contenedorCarrito.innerHTML = " ";

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
//eleminar curso

function eliminarCurso(e){
    //console.log(e.target.classList)
   /* if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        //eliminar el elemento del arreglo

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

        console.log(articulosCarrito)
        //console.log(e.target.getAttribute('data-id'))
        carritoHtml();
    }*/
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        // Buscar el índice del curso en el carrito
        const indice = articulosCarrito.findIndex(curso => curso.id === cursoId);
        // Verificar si la cantidad del curso es mayor que 1
        if (articulosCarrito[indice].cantidad > 1) {
            // Restar 1 a la cantidad del curso
            articulosCarrito[indice].cantidad--;
        } else {
            // Eliminar el curso del carrito
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        }
        // Actualizar el HTML del carrito
        carritoHtml();
    }

}
