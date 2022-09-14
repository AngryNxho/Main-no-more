// vincular una funcion con un objeto, utilizando un metodo

// 1
// function info() {
//     console.log(this);
// }

// let auto = {
//     modelo: 'Modelo 3',
//     anho: 2021,
//     marca: 'Tesla',
//     info:info
// };


// auto.info();




// si convertimos a una funcion flecha veremos algo distinto, this es vacio porque se refiere al ambito global, esta seria una vinculacion implicita.
// 2
// const info = () => {
//     console.log(this);
// }

// let auto = {
//     modelo: 'Modelo 3',
//     anho: 2021,
//     marca: 'Tesla',
//     info:info
// };


// auto.info();


// si queremos utilizar una funcion flecha tendremos que usar una vinculacion explicita, para esto hay tres metodos diferentes,
// bind, call, apply, estos son metodos de las funciones

// 3
function info(a) {
    console.log(this, a);
}

let auto = {
    modelo: 'Modelo 3',
    anho: 2021,
    marca: 'Tesla',
    info:info
};

// info.bind(auto)(); // bind quiere decir vincular

//info.call(auto, 10);// la diferencia entre bind y call es que bind no corre la funcion, a menos que nosotros la corramos, call hace lo mismo pero si corre la funcion

info.apply(auto, [10,20]); // apply es exactamente lo mismo con la diferencia de que pasamos los argumentos en un array


// esta es una herramienta util si tenemos metodos que queremos llamar sobre diferentes objetos, podriamos tener diferentes tipo de autos, con diferentes marcas, 
// de esta manera no tendriamos que repetir el metodo para cada uno de ellos