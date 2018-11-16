// --
//ASYNC: El resultado en transformado en una promesa

// let getNombre = async() => {

//     return 'Pedro';
// }



let getNombre = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Pedro");
        }, 3000);
    });
}


let saludo = async() => {

    // Await siempre debe estar dentro de una función async
    let nombre = await getNombre();

    return `Hola ${nombre}`
}




saludo().then(mensaje => {
    console.log(mensaje);

})