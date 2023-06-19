//Ejercicio #6
//Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.
const arreglo1 =[4,6,7,8,4,3];
const arreglo2 =[3,5,7,true,false,null,3,4];

booleanoArray(arreglo1,arreglo2);

function booleanoArray(lista,lista2){

    const superArreglo = lista.concat(lista2);
    if (superArreglo.length >= 10) { console.log(`es verdero`)
        
    } else {console.log(`es falso`)
        
    }

}