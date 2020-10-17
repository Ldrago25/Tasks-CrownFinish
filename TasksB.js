var boton = document.getElementById("boton-first");

boton.addEventListener("click", gotopag);

function gotopag() {
    document.location.href = "Sprofesional.html";
}

function mostrar(num) {
    
    if (num == 1){
        document.getElementById("empresa-contenido").style.display = 'flex'
        document.getElementById("business-contenido").style.display = 'none'
    } else {
        if (num == 2) {
            document.getElementById("empresa-contenido").style.display = 'none'
            document.getElementById("business-contenido").style.display = 'flex'
        }
    }
    
}