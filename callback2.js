// Esto es un array de ECMA6 en ella se encuenta los registros de los empleados.
// Inicialmente hay tres registros que se crean con corchetes y llaves
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
// Esto es un array de salarios donde se tienen dos registros el  único registro que falta es 
// es el de juan el cual no tiene registro en este array.

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];
//  Esta funcion recibe como parámetro un id, y una función estilo callback 


let getEmpleado = (id, callback) => {

    // Craamos una variable y a ella le asígnamos una función (find)
    // la función de los array recibe como parámetro una función
    // de flecha donde el nombre(empleado) es un objeto que se encuentra en el array
    // es decir array.find(objetoARecorrer=>)
    let empleadoDB = empleados.find(empleado => {
        // en el return se pueden poner condiciones que regresen el objeto
        // es equivalente a decir = if(empleado.id == id) que se pasa por parámetro
        // entonces retorne el objeto que conincida con ese condición
        return empleado.id === id;

    })

    // si el empleadoDB no tiene nada asignado, es porque no encontró resultados.
    if (!empleadoDB) {
        // llama a la función callback y regresa un mensaje como único parámetro
        callback(`No existe empleado con ID ${ id }`)
    } else {
        // sino entonces mande null en el primer parámatro y envíe el callback,
        // empleadoDB contiene el objeto que ha coincidido con la codición
        callback(null, empleadoDB);
    }
    // se imprime el empleado si se ha encontrado 
    console.log(empleadoDB);
}



// llamamos la función que ha sido definida en la parte de arriba
// recibe como parámetro el ID del empleado que se va a buscar
// Y tambien recibe la función callback 
// Si la función devuelve el primer parámetro es porque hay un error
// Entonces se imprime el resultado
// Sino entonces imprima el empleado que ha sido retornado por 
// Parámetro 
getEmpleado(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    console.log(empleado);

});

// Para obtener un salario
// Declaramos la función getSalario que recive el empleado y un callback

let getSalario = (empleado, callback2) => {
    // Se declara una función que   busque por salarios,
    // Se busca en el arrray de salarios  y se le pasa la función 
    // si el ID del salario que se ingresó es igual al id que trae el empleado
    // Que llega por parámetro entonces retorne y asigne a la variable salarioBD 
    let salarioBD = salarios.find((salario) => {
        return salario.id === empleado.id;
    });

    // Si no se econtró salario se envía el mensaje de error

    if (!salarioBD) {
        callback2(`No se encontró salario para ${ empleado.nombre }`)
    } else {
        // sino , no se manda mensaje de error y se manda el salario { deberia ser el empleao}

        callback2(null, salarioBD);
    }


}

// Se crea el empleado como está en el array de la parte superior

let a = {
    id: 3,
    nombre: 'Pedro'
};

// llamamos la funcion y le pasamos el empleado a buscar el salario
// y un callback que verifica que no haya error. Si lo hay muestra 
// el mensae que ha sido enviado y sino se imprime el salario
getSalario(a, (err, salario) => {

    if (err) {
        return console.log(err);
    }

    console.log(salario);

});


// Se crea un console.log("") que muestre un mensaje que dice que
// terminó la ejecución correctamente 
console.log('Terminó ejecución correctamente');


// Aqui se crea  un inventario con objetos de tipo frutas
//  var inventario = [{ nombre: 'manzanas', cantidad: 2 },
//     { nombre: 'bananas', cantidad: 0 },
//     { nombre: 'cerezas', cantidad: 5 }
// ];

// Se crea una función que valida si es cereza o no
//recibe como parámetro la fruta 
// y devuelve el nombre de la fruta en caso de que se igual a cerezas
// function esCereza(fruta) {
//     return fruta.nombre === 'cerezas';
// }

// //console.log(inventario.find(esCereza));
// // { nombre: 'cerezas', cantidad: 5 }


// Se crea un inventario de animales 
// con atributos nombre y cantidad

// let animales = [
//     { nombre: 'perro', cantidad: 2 },
//     { nombre: 'gato', cantidad: 0 },
//     { nombre: 'cebra', cantidad: 5 }
// ];


// let estoyBuscandoEsto = 'gato';

// let esGato = (gato) => {
//     return gato.nombre === estoyBuscandoEsto;
// }


// console.log(animales.find(esGato));