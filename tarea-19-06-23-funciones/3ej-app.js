///Ejercicio #3
//Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx».

  

function generar_caracteres(numero,char){ 

    
    console.log(char.repeat(numero))
}

generar_caracteres(3,"a");