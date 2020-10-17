var Tasks = document.getElementById("TASKS");
var employed = document.getElementById("Employed");
var statis = document.getElementById("Statistics");
var servicios = document.getElementById("boton-first");
//--------eventos de botones---------//
Tasks.addEventListener("click", funTasks);
employed.addEventListener("click", f_employed);
statis.addEventListener("click", f_statis);
servicios.addEventListener("click", f_services);


//--------Funciones-------------//

function f_employed() {
    document.location.href = "addemployed.html";
}

function funTasks() {
    document.location.href = "BusinessP.html" + "#New-content";
}

function f_statis() {
    document.location.href = "TasksB.html" + "#New-content";
}

function f_services() {
    document.location.href = "Sprofesional.html";
}