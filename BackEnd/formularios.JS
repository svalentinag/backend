const doctores = [];
const pacientes = [];
const citaMed = [];

function validarFormularioDoc() {

    const nombreDoc = new RegExp('^[A-Za-z\s]+$');
    const apellidoDoc = new RegExp('^[A-Za-z\s]+$'); //Expresion regular para nombre
    const cedulaDoc = new RegExp('^[0-9]{8,10}$'); // Expresion regular para numeros de cedula de 10 dígitos
    const consultorioDoc = new RegExp('^[a-zA-Z0-9]{4}$');
    const emailDoc = new RegExp('^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$'); // Expresion regular para direcciones de correo electronico
    
    const formularioDoctores = document.getElementById("formulario_doctores");
    
    const nombre_doc = document.getElementById("nombre_doc").value;
    const apellido_doc = document.getElementById("apellido_doc").value;
    const cedula_doc = document.getElementById("cedula_doc").value;
    const especialidad_doc = document.getElementById("especialidad_doc").value;
    const consultorio_doc = document.getElementById("consultorio_doc").value;
    const email_doc = document.getElementById("email_doc").value;
    
    // Validar campos utilizando expresiones regulares
    let error = 0;
    if (!nombreDoc.test(nombre_doc)) {
        error++;
        alert("El nombre es invalido.");
        return false;
    }
    
    if (!apellidoDoc.test(apellido_doc)) {
        error++;
        alert("El apellido es invalido.");
        return false;
    }
    
    if (!cedulaDoc.test(cedula_doc)) {
        error++;
        alert("El numero de cedula es invalido.");
        return false;
    }

    if (!consultorioDoc.test(consultorio_doc)) {
        error++;
        alert("El consultorio es invalido.");
        return false;
    }

    if (!emailDoc.test(email_doc)) {
        error++;
        alert("El email es invalido.");
        return false;
    }

    if(error>0){
        alert("llene el formlario bien.");
        return false;
    }
    else{
        // Crear Objetos
        let objDoctor = {
            nombreDoc: nombre_doc,
            apellidoDoc: apellido_doc,
            cedulaDoc: cedula_doc,
            especialidadDoc: especialidad_doc, 
            consultorioDoc: consultorio_doc,
            emailDoc: email_doc,
        }
    
        
        alert("Se ha guardado exitosamente.");
        console.log(objDoctor);

        //Convertir el objeto a JSON y guardar el archivo JSON
        let jsonDoctor = JSON.stringify(objDoctor);
        console.log(jsonDoctor);
        doctores.push(jsonDoctor);

        console.log(doctores);

        //Mostrar cadena JSON de los datos guardadod

        document.getElementById("showDoctor").innerHTML = doctores;

        //doc.createElement('doctor').appendChild(doc.createElement('doctores'));

        // Mostrando datos guardados:
        /*document.getElementById("showName").innerHTML = objDoctor.nombreDoc;
        document.getElementById("showApellido").innerHTML = objDoctor.apellidoDoc;
        document.getElementById("showCedula").innerHTML = objDoctor.cedulaDoc;
        document.getElementById("showConsultorio").innerHTML = objDoctor.consultorioDoc;
        document.getElementById("showEmail").innerHTML = objDoctor.emailDoc; */
    }
    return false;
    // Limpiar el formulario
    function limpiar(){
        document.getElementById("formularios").reset();
    }
};
 

function validarFormularioPte() {

    const nombrePte = new RegExp('^[A-Za-z\s]+$');
    const apellidoPte = new RegExp('^[A-Za-z\s]+$'); //Expresion regular para nombre
    const cedulaPte = new RegExp('^[0-9]{8,10}$'); // Expresion regular para numeros de cedula de 10 dígitos
    const edadPte = new RegExp('^[0-9]{1,2}$');
    const telefonoPte = new RegExp('^[0-9]{10}$');
    
    const formularioPaciente = document.getElementById("formulario_pacientes");
    
    const nombre_pte = document.getElementById("nombre_pte").value;
    const apellido_pte = document.getElementById("apellido_pte").value;
    const cedula_pte = document.getElementById("cedula_pte").value;
    const especialidad_pte = document.getElementById("especialidad_pte").value;
    const edad_pte = document.getElementById("edad_pte").value;
    const telefono_pte = document.getElementById("telefono_pte").value;
    
    // Validar campos utilizando expresiones regulares
    let error = 0;
    if (!nombrePte.test(nombre_pte)) {
        error++;
        alert("El nombre es invalido.");
        return false;
    }
    
    if (!apellidoPte.test(apellido_pte)) {
        error++;
        alert("El apellido es invalido.");
        return false;
    }
    
    if (!cedulaPte.test(cedula_pte)) {
        error++;
        alert("El numero de cedula es invalido.");
        return false;
    }

    if (!edadPte.test(edad_pte)) {
        error++;
        alert("La edad es invalida.");
        return false;
    }

    if (!telefonoPte.test(telefono_pte)) {
        error++;
        alert("El telefono es invalido.");
        return false;
    }

    if(error>0){
        alert("Diligencie el formulario correctamente.");
        return false;
    }
    else{
        // Crear Objetos
        let objPaciente = {
            nombrePte: nombre_pte,
            apellidoPte: apellido_pte,
            cedulaPte: cedula_pte,
            especialidadPte: especialidad_pte,
            edadPte: edad_pte,
            telefonoPte: telefono_pte
        }
        
        alert("Se ha guardado exitosamente.");
        console.log(objPaciente);

        //Convertir el objeto a JSON y guardar el archivo JSON

        let jsonPaciente = JSON.stringify(objPaciente);
        console.log(jsonPaciente);
        pacientes.push(jsonPaciente);

        console.log(pacientes)

        document.getElementById("showPaciente").innerHTML = pacientes;
    } 
    return false;

    // Limpiar el formulario
    function limpiar(){
        document.getElementById("formulariop").reset();
    }
};


function validarFormularioCita() {

    const cedulaPteCita = new RegExp('^[0-9]{8,10}$'); // Expresion regular para numeros de cedula de 10 dígitos
    
    const formularioCitaMed = document.getElementById("formulario_citaMed");
    
    const cedula_pteCita = document.getElementById("cedula_cM").value;
    const especialidad_pteCita = document.getElementById("especialidad_cM").value;
    
    // Validar campos utilizando expresiones regulares
    let error = 0;
    
    if (!cedulaPteCita.test(cedula_pteCita)) {
        error++;
        alert("El numero de cedula es invalido.");
        return false;
    }

    else{
        // Crear Objetos
        let objCitaMed = {
            
            cedulaPteCM: cedula_pteCita,
            especialidadPteCM: especialidad_pteCita,
        }
        
        alert("Se ha guardado exitosamente.");
        console.log(objCitaMed);

        //Convertir el objeto a JSON y guardar el archivo JSON

        let jsonCitaMed = JSON.stringify(objCitaMed);
        console.log(jsonCitaMed);
        pacientes.push(jsonCitaMed);

        console.log(citaMed)

        document.getElementById("showCitaMed").innerHTML = pacientes;
    } 
    return false;

    // Limpiar el formulario
    function limpiar(){
        document.getElementById("formularioCM").reset();
    }
};

