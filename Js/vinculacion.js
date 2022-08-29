function info() {
    console.log(this);
}




let auto = {
    modelo: 'Modelo 3',
    año: 2021,
    marca: 'Tesla',
    info: info
};

auto.info();



function marvel() {
    console.log(this)
}


let pelicula = {
    nombre: 'Avengers',
    año: 2019,
    productora: 'Marvel',
    info: marvel
};



pelicula.info();


// si queremos utlizar una funcion flecha y queremos utilizarla aqui, podemos hacerlo pero para eso, debemo utilizar una vinculacion explicita