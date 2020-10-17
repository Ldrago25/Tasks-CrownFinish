var name_input = document.getElementById("nombre");
var province_input = document.getElementById("provincia");
var need_input = document.getElementById("que-necesita");
var how_input = document.getElementById("como");
var references_input = document.getElementById("referencias");
var time_input = document.getElementById("tiempo");
var confirmation_input = document.getElementById("confirmacion");
var button_input = document.getElementById("Buscar");

button.addEventListener("click", buscar);

function buscar() {
    fetch('/signup/company', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body :JSON.stringify({
            name: name_input.nodeValue,
            province: province_input.nodeValue,
            need: need_input.nodeValue,
            how: how_input.nodeValue,
            references: references_input.nodeValue,
            time: time_input.nodeValue,
            confirmation: confirmation_input.value
        })
    })
    .then(resp => resp.json())
    .then(resp => {
        if (resp.status) {
            alert(" " + resp.message);
            document.location.href = "index.html";
        } else if (resp.status == -1) {
            alert(" " + resp.message);
        } else if (resp.status == -2) {
            alert(" " + resp.message);
        } else if (resp.status == -3) {
            alert(" " + resp.message);
        } else {
            alert("Error");
        }
    })
    .catch(err => console.log(err))
}


function readFile(input) {

    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {

            var filePreview = document.createElement('img');

            filePreview.id = 'file-preview';

            filePreview.src = e.target.result;

            console.log(e.target.result);

            var previewZone = document.getElementById('file-preview-zone');
            previewZone.appendChild(filePreview);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

var fileUpload = document.getElementById('file-upload');

fileUpload.onchange = function (e) {

    readFile(e.srcElement);

}








