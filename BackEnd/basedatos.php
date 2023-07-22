<?php

$server = "localhost";
$user = "root";
$pass = "";
$database = "formularios";

$conectar= mysqli_connect($server, $user, $pass, $database);

if(!$conectar){
    echo"No es posible conectar con el servidor";
}else{
    echo"No se encontro base de datos";
}

if(isset($_POST[submit])){
    $cedula_doc=$_POST['cedula_doc'];
    $nombre_doc=$_POST['nombre_doc'];
    $apellido_doc=$_POST['apellido_doc'];
    $especialidad_doc=$_POST['especialidad_doc'];
    $consultorio_doc=$_POST['consultorio_doc'];
    $email_doc=$_POST['email.doc'];
    
    $sql="INSERT INTO doctores(cedula_doc, nombre_doc, apellido_doc, especialidad_doc, consultorio_doc, email_doc) 
      VALUES ('$cedula_doc','$nombre_doc','$apellido_doc','$especialidad_doc','$consultorio_doc','$email_doc')";

    $ejecutar=mysqli_query($conectar,$sql);

    if(!$ejecutar){
        echo"Error";
    }
}
?>