<?php

$conectar = new mysqli("localhost","root","","formularios");

if($conectar->connect_error){
    die("Error de conexión: " . $conectar->connect_error);
}

//información formulario
$nombre_pte=$_POST['nombre_pte'];
$apellido_pte=$_POST['apellido_pte'];
$cedula_pte=$_POST['cedula_pte'];
$edad_pte=$_POST['edad_pte'];
$telefonoo_pte=$_POST['telefono_pte'];
$especialidad_pte=$_POST['especialidad_pte'];

$sql="INSERT INTO pacientes(nombre_pte,apellido_pte,cedula_pte,edad_pte,telefono_pte,especialidad_pte) 
 VALUES ('$nombre_pte','$apellido_pte','$cedula_pte','$edad_pte','$telefono_pte''$especialidad_pte')";

if ($conectar->query($sql) === TRUE) {
    echo "Registro exitoso. ¡Gracias por registrarte!";
} else {
    echo "Error al registrar: " . $conectar->error;
}

?>