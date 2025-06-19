let mensaje = prompt("Introduzca un mensaje cualquiera:"); 

function reconocerPalindromo(mensaje){
    let mensajeComparable = mensaje.toLowerCase().replace(/\s/g, '');   
    
    /*En este caso, una vez convertida en minúsculas toda la cadena de caracteres quiero eliminar los espacios en blanco existentes en ella. Para ello, podemos 
    utilizar el método "replace()" para reemplazar cualquier caracter por otro que queramos de la cadena. Para lograr nuestro objetivo podemos hacer uso
    de las expresiones regulares: el meta caracter "\s" sirve para encontrar cualquier espacio en blanco por medio de una expresion regular. Y la bandera 
    "g" le dice a JavaScript no sólo actuar sobre el primer caracter que encuentre, sino todos los que existan en la cadena de caracteres.
    
    Perdón por el tocho de texto Rafa, pero espero que de esta forma te quede más claro todo. :D*/

    let mensajeInvertido = mensajeComparable.split("").reverse().join("");
    
    if(mensajeComparable==mensajeInvertido){
        alert("El mensaje introducido es palíndromo.");
    }else{
        alert("El mensaje introducido no es palíndromo.");
    }
}

reconocerPalindromo(mensaje);