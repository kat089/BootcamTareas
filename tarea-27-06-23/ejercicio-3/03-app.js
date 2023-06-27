/*EJERCICIO 3
Escribe el código que hará lo siguiente:

1-Seleccione la sección con una identificación de contenedor sin usar querySelector.
2-Seleccione la sección con una identificación de contenedor usando querySelector.
3-Seleccione toda la lista de elementos con una clase de "second".
4-Seleccione un elemento de la lista con una clase de “third”, pero solo el elemento de la lista dentro de la etiqueta ol.
5-Dar el texto "¡Hola!" a la sección con un ID de contenedor.
6-Agregue la clase principal al div con una clase de pie de página.
7-Elimine la clase principal en el div con una clase de pie de página.
8-Crea un nuevo elemento li.
9-Dale al li el texto "cuatro".
10-Agregue el li al elemento ul.
 */

const contenedor = document.getElementById('container');
console.log(contenedor);

const contenedorN2 = document.querySelector('#container');
console.log(contenedorN2);

const claseSegunda = document.querySelectorAll('.second');
console.log(claseSegunda);

const terceroOl = document.querySelector(`ol .third`);
console.log(terceroOl);

contenedor.textContent = '¡Hola!';

const nuevaClasePieDePagina = document.querySelector('.footer');
nuevaClasePieDePagina.classList.add('main');
console.log(nuevaClasePieDePagina);

nuevaClasePieDePagina.classList.remove('main');
console.log(nuevaClasePieDePagina);

const elementoNuevoLi = document.createElement('li');
console.log(elementoNuevoLi);

elementoNuevoLi.textContent = 'cuatro';

console.log(elementoNuevoLi);

const elementoNuevoUl = document.createElement('ul')
elementoNuevoUl.appendChild(elementoNuevoLi);
console.log(elementoNuevoUl);

