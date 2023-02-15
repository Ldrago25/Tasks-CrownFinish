var botonG = document.getElementById("go-button");
var botonG2 = document.getElementById("opt");
var bandera = botonG2.value;
botonG.addEventListener("click", letgo);

function letgo() {
    console.log(bandera);
    if (bandera == 1) {
        document.location.href = "IEmpresa.html";
    } else if (bandera == 2) {
        document.location.href = "IProfesional.html";
    } else {
        alert("Algun campo no coincide");

    }
}