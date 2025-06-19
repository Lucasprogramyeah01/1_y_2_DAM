let mes;
mes = prompt("Indica un mes");

alert("Hola Mundo, estamos en "+mes);

let enlace = '<a href="./dsj">'

//Estructura con un "if":

    let cosa1;

    if(whatever!=0){
        cosa=3;
    }else{
        cosa=2;
    }

//Estructura anterior con un ternario:

    let cosa2 = whatever!=0?3:2;    //Quiere decir: let cosa2 = whatever si distinto de 0 entonces 3 si no 2.

//Bucle "for of", es básicamente un "for each" de Java:

    let meses = ['ene','feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

    for (let mes of meses) {
        alert(mes);
    }
