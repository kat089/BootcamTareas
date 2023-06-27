/* Modificar el estilo del texto del párrafo mediante código javascript. Ejemplo de archivo HTML:
Al hacer clic en el botón, la fuente, el tamaño de fuente y el color del texto del párrafo deben cambiar.
*/

function js_style() {
    let text = document.getElementById("text");
    text.style.fontFamily = "Verdana";
    text.style.fontSize = "25px";
    text.style.color = "green";
  }