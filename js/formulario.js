const form = document.getElementById("formulario");
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numero: /\S/,
    emprendimiento: /^.{1,360}$/,
    mensaje: /^.{4,360}$/
}

const campos = {
    nombre: false,
    email: false,
    numero: false,
    emprendimiento: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById("nombreError").classList.remove("enabled")
                document.getElementById("nombreError").classList.add("disabled")
                campos["nombre"] = true
            }else{
                document.getElementById("nombreError").classList.add("enabled")
                document.getElementById("nombreError").classList.remove("disabled")
                campos["nombre"] = false
            }
            
            break;
            
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById("emailError").classList.remove("enabled")
                document.getElementById("emailError").classList.add("disabled")
                campos["email"] = true
            }else{
                document.getElementById("emailError").classList.add("enabled")
                document.getElementById("emailError").classList.remove("disabled")
                campos["email"] = false
            }
            
            break;

        case "numero":
            if(expresiones.numero.test(e.target.value)){
                document.getElementById("numeroError").classList.remove("enabled")
                document.getElementById("numeroError").classList.add("disabled")
                campos["numero"] = true
            }else{
                document.getElementById("numeroError").classList.add("enabled")
                document.getElementById("numeroError").classList.remove("disabled")
                campos["numero"] = false
            }
            
            break;

        case "emprendimiento":
            if(expresiones.emprendimiento.test(e.target.value)){
                document.getElementById("emprendimientoError").classList.remove("enabled")
                document.getElementById("emprendimientoError").classList.add("disabled")
                campos["emprendimiento"] = true
            }else{
                document.getElementById("emprendimientoError").classList.add("enabled")
                document.getElementById("emprendimientoError").classList.remove("disabled")
                campos["emprendimiento"] = false
            }
            
            break;

        case "mensaje":
            if(expresiones.mensaje.test(e.target.value)){
                document.getElementById("mensajeError").classList.remove("enabled")
                document.getElementById("mensajeError").classList.add("disabled")
                campos["mensaje"] = true
            }else{
                document.getElementById("mensajeError").classList.add("enabled")
                document.getElementById("mensajeError").classList.remove("disabled")
                campos["mensaje"] = false
            }
            
            break;
    }
}

function sendEmail(e) {
    e.preventDefault()

    const nombre = document.getElementById("nombre"),
    email = document.getElementById("email"),
    numero = document.getElementById("numero"),
    emprendimiento = document.getElementById("emprendimiento"),
    mensaje = document.getElementById("mensaje")

    if(campos.nombre && campos.email && campos.numero && campos.emprendimiento && campos.mensaje){
        alertLoading()
        Email.send({
            Host: "smtp.gmail.com",
            Username: "marianobazanc11@gmail.com",
            Password: "XXXXXXXXXXXXXX",
            To: "marianobazanc11@gmail.com",
            From: "marianobazanc11@gmail.com",
            Subject: `${nombre.value} quiere contactar contigo`,
            Body: `Email: ${email.value} <br><hr>Numero de telefono: ${numero.value} <br><hr>Emprendimiento: ${emprendimiento.value} <br><hr>Mensaje: ${mensaje.value}`
        }).then(res => {
            alertSuccess()
        })
        .catch(error => alertError())
    }else{

    }
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
textarea.forEach((text) => {
	text.addEventListener('keyup', validarFormulario);
	text.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', sendEmail)