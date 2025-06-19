//Evento

/*let elDiv = document.querySelector('div');
elDiv.addEventListener('mouseover', ratonSobre);

function ratonSobre(elEvento){
    //TODAS LAS LÍNEAS HACEN LO MISMO.

    //let elh1 = this.querySelector('h1');

    let elh1 = this.firstElementChild;

    //let elh1 = this.children[0];

   // let elh1 = elEvento.currenTarget.firstElementChild;

   elh1.hidden = false;
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*let campoNombre = document.getElementById('nombre');
campoNombre.addEventListener('input', eventoInputNombre);   //Con 'input' hemos hecho que mientras se escriba el texto aparece en mayúsculas.

function eventoInputNombre(evento){
    campoNombre.value = campoNombre.value.toUpperCase();
}*/

/*let formulario = document.querySelector('form'); 
formulario.addEventListener('input', eventoInputFormulario);
formulario.addEventListener('submit', enviarFormulario);

function eventoInputFormulario(evento){
    evento.target.value = evento.target.value.toUpperCase();
}

function enviarFormulario(evento){
    evento.preventDefault();        //El método "preventDefault" sirve para evitar el comportamiento usual de navegador.
    //Hago mis cositas.
    alert('He parado el envío del formulario');
    formulario.submit();
}*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//SE APLICAN AL SEGUNDO FORMULARIO.

//Cada vez que cambie algún texto, se pase a mayúscula (menos en la contraseña).

let formulario = document.forms.registro;

for(let campo of formulario.elements){
    if(campo.type==="text"){
        campo.addEventListener('input', pasarMayusculas);
    }else{
        if(campo.className=="password"){
            campo.nextElementSibling.addEventListener('pointerover', verContrasenha);
            campo.nextElementSibling.addEventListener('pointerout', ocultarContrasenha);
        }
    }
}

let iconoOjo = document.querySelector('.bi-eye-fill');

function pasarMayusculas(elEvento){
    this.value = this.value.toUpperCase();
}

function verContrasenha(elEvento){
    this.previousElementSibling.type="text";
}

function ocultarContrasenha(elEvento){
    this.previousElementSibling.type="text";
}

function validarFormulario(elEvento){
    let resultado = true;

    if(document.elements.nombre.value==''){
        resultado = false;
    }

    if(!formulario.elements.genero.checked){
        resultado = false;
    }

    if(resultado){
        formulario.submit();
    }
}

function eventoInputNombre(evento){
    evento.target.value = evento.target.value.toUpperCase();
}

function enviarFormulario(evento){
    evento.preventDefault();        //El método "preventDefault" sirve para evitar el comportamiento usual de navegador.
    //Hago mis cositas.
    alert('He parado el envío del formulario');
    formulario.submit();
}