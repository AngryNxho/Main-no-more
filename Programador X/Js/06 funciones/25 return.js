// function sumar(a,b) {
//     console.log(a + b);
// }

// // sumar(2,3);
// console.log(sumar(2,3));



let usuario = {
    nombre:'Ana',
    apellido: 'Ochoa',
}

function cambiarApellido(usuario){
    let copia = JSON.parse(JSON.stringify(usuario));
    copia.apellido = 'Manriquez';
    return copia;
}


console.log(cambiarApellido(usuario));
console.log(usuario);