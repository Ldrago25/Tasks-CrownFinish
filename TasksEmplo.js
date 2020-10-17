var addEmployee = document.getElementById("adddemployer");
var adddepa = document.getElementById("adddepart");
var search = document.getElementById("search");

addEmployee.addEventListener("click", Addemplo);
adddepa.addEventListener("click", depart);
search.addEventListener("click", newemplo);

function Addemplo() {

    document.location.href = "EmployeAdd.html";
}

function depart() {
    document.location.href = "DepartAdd.html";

}

function newemplo() {
    document.location.href = "SearchEmple.html";
}