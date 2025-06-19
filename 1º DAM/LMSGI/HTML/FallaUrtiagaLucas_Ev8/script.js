//EJERCICIO 1:

/*function redondearArrays(unArray){
    for(let i=0; i<unArray.length; i++){
        if(unArray[i]<0 || isNaN(unArray[i])){
            unArray.splice(indexOf(unArray[i]),1);
        }else{
            Math.round(unArray[i]);
        }
    }
}

redondearArrays(unArray);*/

function redondearElementos(unArray){
    for(let i=0; i<unArray.length; i++){
        if(!isNaN(unArray[i])){
            unArray[i]=Math.round(unArray[i]);
        }else{
            unArray.splice(i,1);        //Así se borra con el splice. SÓLO CON 2 CONDICIONES.
            i--;
        }
    }
    return unArray;
}

redondearElementos(unArray);

//EJERCICIO 2:      Este ejercicio estaba bien hecho ¡Gran trabajo! :P

/*function eliminarExtremos(unArray){
    unArray.sort(function comparar (a, b){
        return b-a;
    })

    unArray.shift();

    unArray.pop();
}

eliminarExtremos(unArray);*/

function eliminarExtremos(unArray){
    let indexMayor = 0;
    let indexMenor = 0;

    for(let i; i<unArray.length; i++){
        if(unArray[i]>unArray[indexMayor]){
            indexMayor=i;
        }
    }

    unArray.splice(indexMayor,1);

    for(let i; i<unArray.length; i++){
        if(unArray[i]<unArray[indexMenor]){
            indexMenor=i;
        }
    }

    unArray.splice(indexMenor,1);

    return unArray;
}

//EJERCICIO 3:

/*function parsearNotas(str){

    let filtro = str.split('#');
}

parsearNotas(str);*/

function parsearNotas(str){
    let resultado = new Array();
    let listaJurados = str.split('#');

    for(let i=0; i<listaJurados.length; i++){
        resultado[i] = listaJurados[i].substring(listaJurados[i].indexOf(':')+1);

        let partes = listaJurados[i].split(':');
        resultado.push(partes[1]);
    }
    return resultado;
}

//EJERCICIO 4:

/*function principal(){
    function calcularMedia(eliminarExtremos(redondearArrays(parsearNotas(str)))){

    }

    for(let i=0; i<unArray.length; i++){
        suma += Number(unArray[i]);  
    }

    let media = unArray;

    alert()
}

principal();*/

function principal(){
    let cadena = 'Aquí va una cadena';

    let arrayNotas = parsearNotas(cadena);
    arrayNotas = redondearElementos(arrayNotas);
    arrayNotas = eliminarExtremos(arrayNotas);

    let suma=0;

    for(let nota of arrayNotas){
        suma+=nota;
    }

    alert(suma/arrayNotas.length);
}

principal();