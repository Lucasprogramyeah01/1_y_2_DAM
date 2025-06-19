let p1 = document.getElementById('parrafo1');

// alert(p1.innerHTML);     Muestra TAL CUAL el contenido de la etiqueta del identificador al que estamos mencionando. En este caso llamamos a "p1" que tiene el id "parrafo1".

alert(p1.innerText);

//p1.innerHTML = '<strong>Lo he cambiado jajajaja</strong>';        Cambia lo escrito en "p1".

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*let elementos = document.querySelectorAll('body ol li');    //Devuelve una colección con todos los elementos que coinciden con el selector CSS indicado.

for(let e of elementos){
    alert(e.innerHTML);
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let boton = document.getElementById('boton');
boton.addEventListener('click', botonPulsado);

/*function botonPulsado(){
    let primerLi = document.querySelectorAll('li:first-child');
    for(let o of primerLi){
        alert(o.innerText);
    }
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*function botonPulsado(){
    let texto = prompt('Diga el texto del nuevo elemento');

    //Obtengo la lista.
    let lista = document.querySelector('ol');

    //Creo el nuevo elemento.
    let nuevoLi = document.createElement('li');

    //Le doy contenido.
    nuevoLi.innerText = texto;

    //Añado el "li" al "ol".
    lista.append(nuevoLi);
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*function botonPulsado(){
    //Ambos códigos hacen lo mismo.

        let zonaMensajes = document.querySelector('.zonaMensajes');

        let numActual = parseInt(nuevoP.querySelector('strong').innerText)+1;

        zonaMensajes.querySelector('strong').innerText = numActual;

        zonaMensajes.after(nuevoP);

    //------------------------------------------------------------------------------------//

        let zonaMensajes = document.querySelector('.zonaMensajes');

        let numMensajes = zonaMensajes.querySelector('strong');
        let numActual = parseInt(numMensajes.innerText)+1;

        numMensajes.innerText = numActual;
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*function botonPulsado(){
    //Obtengo la lista.
    let lista = document.querySelector('ol');

    let segundoLi = lista.querySelector('li:nth-child(2)');

    //Añado el "li" al "ol".
    lista.append(segundoLi);
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*function botonPulsado(){
    let zonaMensajes = document.querySelector('.zonaMensajes');
    zonaMensajes.hidden = !zonaMensajes.hidden;
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*function botonPulsado(){
    let zonaMensajes = document.querySelector('.zonaMensajes');
    zonaMensajes.innerText = "el botón es tipo "+boton.type;        //Indica el tipo de un elemento (en este caso lo utilizamos con un botón, cuyo tipo es "button").

    let enlace = document.createElement('a');
    enlace.setAttribute('href','#inicio');
    document.querySelector('body').id='inicio';
    enlace.innerText="Ir al inicio";
    zonaMensajes.append(enlace);        //Crea un enlace que lleva al inicio.
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*function botonPulsado(){
    boton.className += ' text-danger';      //Cambia el color del texto de un elemento (en este caso el texto del botón).
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function botonPulsado(){
    boton.classList.toggle('btn-primary');      //La propiedad toggle significa "alternar" y alterna entre los estilos de aquellos elementos que tengan un ".toggle" (en este caso cada vez que clicamos el botón cambia de ser color "primary" a "warning" y viceversa).
    boton.classList.toggle('btn-warning');
}
