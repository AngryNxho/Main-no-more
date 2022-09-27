const objeto = {PDX : 'Portland', UIO: 'Quito'};


// Recorrer O(n)
// for (let key in objeto) {
    // console.log(key, objeto[key]);
// }


// Buscar
// console.log(objeto.PDX); // O(1)


// Insertar 
// objeto['SEA'] = 'Seattle';
// console.log(objeto); //O(1)


// Borrar
delete objeto.PDX;
console.log(objeto); //O(1)



// Buscar, Insertar, Borrar,
