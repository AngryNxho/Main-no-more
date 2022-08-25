let usuario = {
    nombre:"Ana",
    apellido: "Perez"

};

function cambiarapellido(objeto){
    let copia= JSON.parse(JSON.stringify(objeto));
    objeto.apellido = "Manriquez";
    return copia;
}

console.log(cambiarapellido(usuario));
console.log((usuario));


// es una buena idea no hace mutaciones con los objetos y si queremos cambiarlo, debemos hacer una copia
//del objeto con json.parse(json.stringify(objeto))