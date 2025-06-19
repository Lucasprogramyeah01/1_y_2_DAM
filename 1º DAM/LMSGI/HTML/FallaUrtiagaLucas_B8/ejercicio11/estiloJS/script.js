let tamanho = prompt("Introduzca un tamaño para el array:");

let ArrayDeNumeros = new Array();

ArrayDeNumeros.length = tamanho;

function rellenarArray(ArrayDeNumeros){
    for(let i=0; i<ArrayDeNumeros.length; i++){
        let numeroIntroducido = prompt("Introduzca un número:");

        ArrayDeNumeros[i] = numeroIntroducido;
    }
}

rellenarArray(ArrayDeNumeros);

function sumarNumeros(ArrayDeNumeros){
    let suma=0;

    for(let i=0; i<ArrayDeNumeros.length; i++){
       suma += Number(ArrayDeNumeros[i]);            //La instrucción "Number()" sirve para que todo aquello situado entre los paréntesis sea tratado como un número.
    }

    return alert(suma);
}

sumarNumeros(ArrayDeNumeros);

function actualizarArray(ArrayDeNumeros){
    let numeroDado = prompt("Introduzca un número:");

    while(isNaN(numeroDado)==false || numeroDado>=0){
        
        actualizador = numeroDado;

        let suma2=0;

        ArrayDeNumeros.shift();

        ArrayDeNumeros.push(actualizador);

        for(let i=0; i<ArrayDeNumeros.length; i++){
            suma2 += Number(ArrayDeNumeros[i]);  
        }

        alert(suma2);

        numeroDado = prompt("Introduzca un número:");
    }
}

actualizarArray(ArrayDeNumeros);