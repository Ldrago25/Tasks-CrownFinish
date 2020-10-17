function mostrar (num) {
    if(num.value == 1) {
        document.getElementById("contenido-profesional").style.display = "block";
        document.getElementById("contenido-comercial").style.display = "none";
    } else {
        if(num.value == 2) {
            document.getElementById("contenido-profesional").style.display = "none";
            document.getElementById("contenido-comercial").style.display = "block";
        }
    }
    
}