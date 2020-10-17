var profession = document.getElementById("PROFESSION");
var tasks = document.getElementById("TASKS");
var search = document.getElementById("SEARCH")

profession.addEventListener("click", fprofession);
tasks.addEventListener("click", ftasks);
search.addEventListener("click", fsearch)

function fprofession() {
    document.location.href = "ProfessionalP.html" + "#profession-content";
}

function ftasks() {
    document.location.href = "TasksWP.html" + "#work-content";
}

function fsearch() {
    document.location.href = "SWork.html" + "#search-content"
}