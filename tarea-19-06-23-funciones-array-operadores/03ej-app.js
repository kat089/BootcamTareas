//Ejercicio #7
//Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].

const listEnteros=[2,5,2]
const listEnteros2=[1,5,3]

function funcionArray(arreglo,arreglo2){
const superArreglo = arreglo.concat(arreglo2).map(x=>x*2)
  return superArreglo

}

  

console.log(funcionArray(listEnteros,listEnteros2));