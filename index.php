
<?php
if(isset($_POST["nombre"])){
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$numero = $_POST["numero"];
$emprendimiento = $_POST["emprendimiento"];
$mensaje = $_POST["mensaje"];
$para = 'marianobazanc11@gmail.com';
$titulo = 'Hola - La Webera';

$msjCorreo = "Nombre: $nombre \n E-Mail: $email \n Mensaje: \n $mensaje";
}

if (isset($_POST['submit'])) {
if (mail ('marianobazanc11@gmail.com', 'Titulo', 'Mensaje correo')) {
echo 'El mensaje se ha enviado';
} else {
echo 'Falló el envio';
}
}
?>