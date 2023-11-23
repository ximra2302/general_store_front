document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();


    let tipoDocumento = document.getElementById("tipo-documento");
    let tc = tipoDocumento.options[tipoDocumento.selectedIndex].value;
    let documento = document.getElementById("documento").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let usuario = document.getElementById("Nombre-de-usuario").value;
    let correo = document.getElementById("correo").value;
    let contrasenia = document.getElementById("password").value;
    let terminos = document.getElementById("terminos").checked;
    let boletin = document.getElementById("boletin").checked;

    if (tc === "" || documento === "" || nombre === "" || apellido === "" || usuario === "" || correo === "" || contrasenia === "" || !terminos) {
        alert("rellena los campos");
    } else {
        alert("formulario enviado exitosamente")
    }
});

// document.getElementById("enviar").addEventListener("click", function (evento) { evento.preventDefault(); alert("formulario enviado exitosamente")});
