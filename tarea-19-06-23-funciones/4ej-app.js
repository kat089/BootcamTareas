//Ejercicio #4
//Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.
const numeros = [1,2,3,5]
const arreglo = numeros.length;

function sumaArreglo(suma,lengitud){
    console.log(suma+lengitud)
}

const suma = numeros.reduce((total, num) => total + num);
 console.log(suma)

 sumaArreglo(suma,arreglo)