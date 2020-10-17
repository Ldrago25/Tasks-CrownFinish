function mostrar (num) {
    if(num.value == 1) {
        document.getElementById("contenido-servicio").style.display = "block";
        document.getElementById("contenido-solicitud").style.display = "none";
    } else {
        if(num.value == 2) {
            document.getElementById("contenido-servicio").style.display = "none";
            document.getElementById("contenido-solicitud").style.display = "block";
        }
    }
    
}