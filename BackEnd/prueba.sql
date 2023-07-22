create table Doctores (
    nombre char(50) not null, /*datos obligatorios*/
    apellido char(50),
    cedula int not null unique /* el dato es unico */
)

select from Doctores