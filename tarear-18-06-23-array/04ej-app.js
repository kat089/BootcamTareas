// Diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.
//ejemplo : Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14


const numeros =[2,4,5,1,2,2];


const suma = numeros.reduce((total, num) => total + num);
console.log(suma); 

