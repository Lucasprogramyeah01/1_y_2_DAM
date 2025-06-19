let texto = prompt("Introduzca una cadena de texto:");

function saberTamanhoLetras(texto){
    if(texto==texto.toLowerCase()){
        alert("La cadena de texto está formada solamente por letras minúsculas.");
    }else{
        if(texto==texto.toUpperCase()){
            alert("La cadena de texto está formada solamente por letras mayúsculas.");
        }else{
            alert("La cadena de texto está formada por letras minúsculas y mayúsculas.");
        }
    }
}

saberTamanhoLetras(texto);