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
        document.location.href = "IEmpresa.html";
    } else if (bandera == 2) {
        document.location.href = "IProfesional.html";
    } else {
        alert("Algun campo no coincide");

    }
}