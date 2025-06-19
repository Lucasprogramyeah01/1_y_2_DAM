let factorial = 1;

let numero = prompt("Introduzca el número entero del que desea calcular su factorial:");

for (let i = 0; i < numero; i++) {
    factorial = (numero-i)*factorial;
}

alert("El factorial de "+numero+" es "+factorial+".");

//La razón por la que he igualado la variable factorial a "1" al inicio, es porque 0! es igual 1.

/*Por definición, el factorial de un número es el producto de todos los números “positivos", inferiores a ese número, a partir de 1. Entonces, 
si empezamos a contar desde el 1 hacia arriba, nos podemos dar cuenta de que no hay ningún número positivo inferior a 0, de ahí que nos quedemos 
con el 1. La verdad es que es una explicación muy poco rigurosa, pero sirve para entender el concepto.*/