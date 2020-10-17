var name_input = document.getElementById("name-input");
var identication_input = document.getElementById("nombre-empresa-input");
var description_input = document.getElementById("fecha-fundacion-input");
var email_input = document.getElementById("email-input");
var country_input = document.getElementById("Country-input");
var state_input = document.getElementById("State-input");
var city_input = document.getElementById("City-input");
var password_input = document.getElementById("password-input");
var phone_input = document.getElementById("telefono-input");
var button = document.getElementById("Register");


button.addEventListener("click", register);


function register() {
    fetch('/signup/company', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name_input.value,
                identification: identication_input.value,
                phone: phone_input.value,
                email: email_input.value,
                description: description_input.value,
                country: country_input.value,
                state: state_input.value,
                city: city_input.value,
                password: password_input.value
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