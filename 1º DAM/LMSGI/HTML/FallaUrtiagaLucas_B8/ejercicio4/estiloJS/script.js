let valores = [true, 5, false, "hola", "adios", 2];

//Apartado a):

    let mayor = (valores[3]>valores[4])?valores[3]:valores[4];

    alert("El elemento mayor es "+mayor+".");

//Apartado b):

    alert(valores[0]||valores[2]);

    alert(valores[0]&&valores[2]);

//Apartado c):

    alert("La suma de los 2 valores numéricos del array es: "+valores[1]+valores[5]+".");
    alert("La resta de los 2 valores numéricos del array es: "+valores[1]-valores[5]+".");
    alert("El producto de los 2 valores numéricos del array es: "+valores[1]*valores[5]+".");
    alert("El cociente de los 2 valores numéricos del array es: "+valores[1]/valores[5]+".");
    alert("El módulo de los 2 valores numéricos del array es: "+valores[1]%valores[5]+".");