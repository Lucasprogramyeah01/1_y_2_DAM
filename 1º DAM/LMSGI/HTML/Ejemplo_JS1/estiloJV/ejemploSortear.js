//EJERCICIO

function sortear(arr){      //"arr" es un array cualquiera.
    let desde = 0;
    let hasta = arr.length;

    let numAleatorio = Math.floor(desde+Math.random()*hasta);

    return arr[numAleatorio];
}

//EJERCICIO 2: PASAR DE KEBAB STYLE A CAMELCASE.

function camelize(str){      //"str" es un String cualquiera.

    //border-left-radius -> borderLeftRadius

    //Quitamos guiones y separamos por palabras.
    let palabrasSueltas = str.split('-');

    //Cambiar primera letra a mayúsculas (a partir de la 2ª).
    for(let i=1; i<palabrasSueltas.length; i++){
        let primeraLetraEnMayuscula = palabrasSueltas[i].charAt(0).toUpperCase()
        palabrasSueltas[i] = primeraLetraEnMayuscula+palabrasSueltas[i].substring(1);
    }

    //Unir las palabras.

    return palabrasSueltas.join('');
}

//EJERCICIO 3: 

function pedirNombres(){
    let resultado = new Array();

    let texto = prompt("Introduzca un texto");

    while(isNaN(texto)){
        resultado.push(texto);
        texto = prompt("Introduzca un texto");
    }

    return resultado;
}

//EJERCICIO 4:

function principal(){
    let propiedadesCSS = pedirNombres();

    for(let i=0; i<propiedadesCSS.length; i++){
        propiedadesCSS[i] = camelize(propiedadesCSS[i]);
    }

    alert("El segundo es: "+sortear(propiedadesCSS));
}

principal()





