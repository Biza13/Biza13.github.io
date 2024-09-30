/**
 * Funcion a la que le introduces como parametro un objeto Date y te devuelve los 
 * años en que tu cumplealos ha caido en domingo
 * @param {object} fecha date
 */
function cumplEnDomingo(fecha){
    let añoNac = fecha.getFullYear();
    let añoAct = new Date().getFullYear();
    for(let i = añoNac; i<=añoAct; i++){
        fecha.setFullYear(i);
        if (fecha.getDay() == 0){
            console.log(fecha.getFullYear());
        }
    }
}

