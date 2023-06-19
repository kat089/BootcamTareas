//Ejercicio #1
//Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».

function numeroMayor(n1,n2,n3){
 let resultado = 0;

if (n1===n2&&n1==n3) {console.log(`son iguales`)
    
} else {    console.log(`el numero mayor es ${resultado=Math.max(n1,n2,n3)}`)
    
}


}

numeroMayor(1,5,6);
numeroMayor(1,1,1);