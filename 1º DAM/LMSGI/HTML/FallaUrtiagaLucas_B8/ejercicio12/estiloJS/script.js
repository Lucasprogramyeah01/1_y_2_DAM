let ArrayDeNumeros = [1, 2, 5, 70, 89, 45, 69, 32, 10, 500, 768, 4, 935, 1050, 4000, 300000];       //Este array lo he creado para que se vea que el método funciona.

function ordenarDeMayorAMenor(ArrayDeNumeros){
    ArrayDeNumeros.sort(function comparar (a, b){
        return b-a;
    })

    alert(ArrayDeNumeros);
}

ordenarDeMayorAMenor(ArrayDeNumeros);

/*El método "sort()" ordena los elementos de un array localmente y lo devuelve ordenado según el criterio que le hayamos dado.
Funciona igual al método "compareTo()" de Java, solo que en el caso de JavaScript el criterio de ordenación por defecto responde 
a la posición del valor del string de acuerdo a su valor Unicode.*/