//Ejercicio #5
//Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

const numero = [2,4,6,7]

function multiplicarArreglo(listaNumeros){
let listaNumerosMax = Math.max(...listaNumeros);
let listaNumerosMin =Math.min(...listaNumeros);
 return listaNumerosMin*listaNumerosMax;

}
console.log(multiplicarArreglo(numero));