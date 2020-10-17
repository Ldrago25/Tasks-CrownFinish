var notificar = document.querySelector("#notificar");
var boton = document.querySelector("#boton-notificacion");
var segundo_boton = document.querySelector("#boton-notificacion2");

boton.addEventListener('click', function() {
    if (!notificar.classList.contains('activar')){
        notificar.classList.add('activar');
        notificar.classList.remove('desactivar');
    } else {
        notificar.classList.remove('activar');
        notificar.classList.add('desactivar');
    }
});

segundo_boton.addEventListener('click', function() {
    if (!notificar.classList.contains('activar')){
        notificar.classList.add('activar');
        notificar.classList.remove('desactivar');
    } else {
        notificar.classList.remove('activar');
        notificar.classList.add('desactivar');
    }
});