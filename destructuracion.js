let deappool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {

        return `${ this.nombre } ${ this.apellido } -poder: ${ this.poder }`
    }

};


let { nombre: primerNombre, apellido, poder } = deappool;

console.log(primerNombre, apellido, poder);

//console.log(deappool.getNombre());