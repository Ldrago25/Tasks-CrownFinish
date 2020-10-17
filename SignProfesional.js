var name_input = document.getElementById("name-input");
var business_input = document.getElementById("business-name-input");
var nac_input = document.getElementById("nac-input");
var email_input = document.getElementById("email-input");
var phone_input = document.getElementById("phone-input");
var description_input = document.getElementById("description-input");
var password_input = document.getElementById("password-input");
var passwordc_input = document.getElementById("confirm-pasword-input");
var country_input = document.getElementById("Country-input");
var state_input = document.getElementById("State-input");
var city_input = document.getElementById("City-input");
var button = document.getElementById("Register");

button.addEventListener("click", register);

function register() {
    fetch('/signup/employer', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name_input.value,
                profesion: business_input.value,
                email: email_input.value,
                phone: phone_input.value,
                date: nac_input.value,
                country: country_input.value,
                state: state_input.value,
                city: city_input.value,
                description: description_input.value,
                password: password_input.value,
                confirmPassword: passwordc_input.value
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