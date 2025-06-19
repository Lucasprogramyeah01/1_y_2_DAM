let laborables = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
let finde = ['sabado', 'domingo'];

//CONCAT()

let semana = laborables.concat(finde);      //"laborables" y "finde" se concatenan en un nuevo array llamado "semana".

alert('En semana: '+semana);
alert('En laborables: '+laborables);
alert('En finde: '+finde);

//JOIN(SEPARADOR)

let semana2 = laborables.join('#');         //Convierte el array "laborales" en un String llamado "semana2" que tiene los elementos de "laborables" y los separa con un "#".

alert(semana2);

//POP()

let ultimoDia = semana.pop();               //Elimina el último elemento del array y lo devuelve. El array original y su longitud disminuye en 1 elemento. Hemos eliminado "domingo".

//PUSH()

//SHIFT()

//UNSHIFT()

semana.unshift(ultimoDia);                  //Agrega un elemento al inicio de un array, incrementando en 1 su tamaño. El elemento "domingo" que hemos borrado con pop(), pero lo volvemos a inscribir al principio del array.

alert(semana);

//REVERSE   Invierte el orden de los elementos de un array.

//SPLICE    ¡MÉTODO MUY IMPORTANTES, SE COMO UNA NAVAJA SUIZA PARA LOS ARRAYS!

//INDEX OF() y LASTINDEXOF()

alert('El domingo es el elemento '+semana.indexOf('domingo')+' del array.');

//PARSE

/*let num1 = prompt('Dime un número');
let num2 = prompt('Dime otro número');

if(!isNaN(num1)&&!isNaN(num2)){
    alert(parseInt(num1)+parseInt(num2));
}else{
    alert('Anda y dame un número, déjate de bromas.');
}*/

//Mejor así:

let num1 = parseInt(prompt('Dime un número'));
let num2 = parseInt(prompt('Dime otro número'));

if(!isNaN(num1)&&!isNaN(num2)){
    let resultado = num1+num2;
    alert(resultado);
}else{
    alert('Anda y dame un número, déjate de bromas.');
}

//MÉTODO QUE RECOGE DATOS

let unArray = leerArrayPorTeclado();
alert('El array tiene '+unArray.length+' elementos y es '+unArray+'.');

function leerArrayPorTeclado(){
    let dato;
    let continuar;
    let miArray = new Array();

    do{
        dato = prompt("Diga algo para guardar en un array");
        continuar= dato!='';

        if(continuar){
            miArray.push(dato);
        }
    }while(continuar)
    return miArray;
}