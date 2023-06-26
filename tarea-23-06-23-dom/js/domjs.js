///variables

const formuladio = document.querySelector('#formulario');
const botonEnviar = document.querySelector('#btn');



formuladio.addEventListener('submit',(e)=>{
e.preventDefault();


    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const saludo = document.querySelector("#saludo");
    saludo.innerHTML = `Hola ${nombre} ${apellido}, gracias por rellenar el formulario`;

});




