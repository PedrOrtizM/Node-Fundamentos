// setTimeout(() => {
//     console.log('HolaMundo');
// }, 3000);


// se crea la función que obtiene un usuario y recibe el ID y la función CALLBACK
let getUsuarioID = (id, callback) => {
    // Se crea un usuario con con nombre Pedro y un ID que es pasado por paráemetro
    let usuario = {
        nombre: 'Pedro',
        id: id // una es la variable que se pasa por parámetro


    }

    // Si el ID es igual a 20 
    if (id === 20) {
        callback(`El usuario con id ${ id } no existe en la BD`);
    } else {
        // Regresamos el usuario con nombre Pedro  y id pasado por parámetro
        callback(usuario);


    }

}

// Ejecutamos la función con ID 1 y con usuario en vacío.
getUsuarioID(1,
    (usuario) => { console.log('Usuario de base de datos', usuario); }

);