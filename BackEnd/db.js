const mysql = require('mysql')

const conectar = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"formularios"
})

conectar.connect((error) => {
    if(error){
        console.log("Error de conexión: " + error)
        return
    }
    console.log("Conexión Exitosa")
})

module.exports = conectar