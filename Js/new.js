// ahora crearemos clases que realmente son plantillas que nos permitiran crear objetos de una manera mas rapida

// primero veremos como se creaba antes, esta es una manera de ver como ha evolucionado javascript


let auto1 = {

};

let auto2 = {

};


// cuando creamos una clase es una buena practica empezar con mayuscula

function Auto(modelo, anho, marca) {
    this.modelo = modelo;
    this.anho = anho;
    this.marca = marca;
}

// ahi hemos creado una clase que nos permitira crear cualquier cantidad de objetos rapidamente


console.log(new Auto('Modelo 3', 2021, 'Tesla'));
console.log(new Auto('Hummer EV', 2022, 'GMC'));



