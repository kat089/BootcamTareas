///Ejercicio #2
//Escriba una función con el nombre de esVocal() que tome un carácter, devuelva True si es vocal (no importa si es mayúscula o minúscula), y devuelva False en caso contrario.


function esVocal(a){

    if (a==="a"||a==="e"||a==="i"||a==="o"||a==="u") {console.log(`es una vocal ${a}`)
        
    } else { console.log(`no es una vocal ${a}`)
        
    }
}

esVocal("i");
esVocal("d");