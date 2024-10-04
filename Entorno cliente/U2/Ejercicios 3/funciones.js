function invierteCadena(cad){
    let cadInv = "";
    for(let i = cad.length-1; i >= 0; i--){
        cadInv += cad[i];
    }
    return cadInv;
}

function inviertePalabras(cad){
    let arr = cad.split(" ");
    let nuevoArr = [];
    for(let i = arr.length-1; i>= 0; i--){
        nuevoArr.push(arr[i]);     
    }
    return nuevoArr;
}

function encuentraPalabraMasLarga(cad){
    let palabraLarga = "";
    let arr = cad.split(" ");
    for(let i = 0; i <= arr.length-1; i++){
        let palabra = arr[i];
        if (palabraLarga.length > palabra.length){
        }else{
            palabraLarga = palabra;
        }
    }
    return palabraLarga;
}

function fltraPalabrasMasLargas(cad, ind){
    let arr = cad.split(" ");
    let arrPalabras = [];
    for(let i = 0; i<=arr.length-1; i++){
        let palabra = arr[i];
        if (palabra.length > ind){
            arrPalabras.push(palabra);
        }
    }
    return arrPalabras;
}

function cadenaBienFormada(cad){
    let cadMin = cad.toLowerCase();
    let primeraMayuscula = cadMin[0].toUpperCase();
    let restoCadena = "";
    for(let i = 1; i<=cadMin.length-1; i++){
        restoCadena += cadMin[i];
    }
    return primeraMayuscula + restoCadena;
}