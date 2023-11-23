let usuario = document.getElementById("user").value;
let contrasenia = document.getElementById("pass").value;

btn.addEventListener("click", function (evento) {
    evento.preventDefault();
    if (usuario == "" & contrasenia == "") {
        alert("Ingresa tu usuario y contraseña")
    }
});

