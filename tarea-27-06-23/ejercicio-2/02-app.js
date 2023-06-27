/* Escriba una función de JavaScript para obtener los valores de Nombre y 
Apellido del siguiente formulario.

const formulario = document.querySelector('#form1');

formulario.addEventListener('submit',getFormvalue)


function getFormvalue(e){
    e.preventDefault();
     const nombre = document.querySelector('[name="fname"]').value
     const apellido = document.querySelector('[name="lname"]').value

     const usuario = [nombre,apellido]

     console.log(usuario)

    
}
*/

function getFormvalue() {
    var formulario = document.getElementById("form1");
    var nombre = document.querySelector('[name="fname"]').value
    var apellido = document.querySelector('[name="lname"]').value
    console.log(`${nombre} ${apellido}`);
    
  }
  