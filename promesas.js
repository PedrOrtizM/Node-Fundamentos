let empleados = [{
        id: 1,
        nombre: 'Pedro'
    },
    {
        id: 2,
        nombre: 'Melisa'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];


let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];






let getEmpleado = (id) => {


    return new Promise((resolve, reject) => {


        let empleadoDB = empleados.find(empleado => {

            return empleado.id === id;

        })

        if (!empleadoDB) {
            reject(`No existe empleado con ID ${ id }`)
        } else {

            resolve(empleadoDB);
        }

    });


}



getEmpleado(1).then(empleado => {
    console.log("Empleado de base de datos ", empleado);
}, (err) => {
    console.log(err);
})