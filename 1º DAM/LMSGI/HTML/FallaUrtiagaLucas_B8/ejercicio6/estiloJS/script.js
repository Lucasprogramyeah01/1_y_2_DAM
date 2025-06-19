let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Apartado a):

    let numero = prompt("Indique el número de su DNI:");

    let letra = prompt("Indique la letra de su DNI:");

//Apartados b), c) y d):

    alert((numero<0 || numero>99999999)?"El número introducido no es válido.":letras[numero%23]==letra?"El número y la letra del DNI son correctos":"La letra que ha indicado no es correcta.");

/*La parte del apartado d) está metida en el bucle creado en el apartado b) porque pone en el enunciado específicamente que una vez que el programa devuelva 
"El número introducido no es válido" no mande ningún mensaje más.*/