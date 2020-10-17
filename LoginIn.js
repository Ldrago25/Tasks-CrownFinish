var botonE = document.getElementById("empresario");
var botonP = document.getElementById("profesional");
var botonG = document.getElementById("go-button");
var bandera = 0;
botonE.addEventListener("click", empresario);
botonP.addEventListener("click", profesional);
botonG.addEventListener("click", letgo);

function empresario() {
    bandera = 1;
}

function profesional() {
    bandera = 2;
}

function letgo() {
    if (bandera == 1) {
        //Aqui buscas en la BD para Empresario
    } else if (bandera == 2) {
        //Aqui buscas en la BD para Profesional
    } else {
        alert("Algun campo no coincide");

    }
}