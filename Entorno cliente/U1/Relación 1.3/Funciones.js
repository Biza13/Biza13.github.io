/**
 * Funcion para calcular la edad dada el año de nacimiento como parámetro y la fecha actual que se coge del sistema
 * @param {año de nacimiento} anyo 
 * @returns años que tiene la persona actualmente
 */
function ageCalculator (anyo) {
    let fActual = new Date().getFullYear();
    let anyoNac = anyo;
    let anyos = fActual - anyoNac;
    return anyos;
}

/**
 * Función que calcula la cantidad de snacks que necesitaras para los años qu te queden
 * @param {años actuales} anyosP 
 * @param {años que crees que vas a vivir} anyosMaximosP 
 * @param {cantidad de snack diario} cantDiariaP 
 * @returns la cantidad a ingerir
 */
function supplyCalculator(anyosP, anyosMaximosP, cantDiariaP){
    let anyos = anyosP;
    let anyosMaximos = anyosMaximosP;
    let cantDiaria = cantDiariaP;
    let anyosRestantes = anyosMaximos-anyos;
    let cantIngerir = cantDiaria * 365 * anyosRestantes;
    return cantIngerir;
}

/**
 * Función para calcular la circunferencia de un circulo
 * @param {radio del circulo} radio 
 * @returns circunferencia
 */
function circumference(radio){
    let diam = radio * 2;
    let pi = Math.PI;
    let circ = pi *diam;
    return circ;
}

/**
 * Función para calcular el área de un circulo
 * @param {radio del circulo} radio 
 * @returns area
 */
function area(radio){
    let r2 = Math.pow(radio, 2);
    let pi = Math.PI;
    let area = pi * r2;
    return area;
}

/**
 * Funcion que pasa de fahrenheit a celsius y viceversa
 * @param {la temperatura que se desea cambiar} temp 
 * @returns la temperatura cambiada
 */
function convertTemperature(temp){
    let letra = "C";
    let array = temp.split(" ");    //creo un array para dividir la cadena temp usando el espacio como separador y cada palabra sera un dato del array
    let temperatura = parseInt(array[0]);   //parseo porque lo que obtenemos es una cadena, asi que lo paso a número
    let tempConv;
    if (temp.includes(letra)){
        //si contiene la letra C es que son celsius, asi que convertimos a fahrenheit
        tempConv = temperatura + 32;
    }else{
        tempConv = temperatura -32;
    }
    return tempConv;
}