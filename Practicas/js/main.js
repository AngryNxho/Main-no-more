let objeto = {
    nombre: 'Ignacio',
    apellido: 'Manriquez',
    edad: 21,

    objeto1: {
        nombre:'Objeto2',
    }

};

// console.log(objeto);
// console.log(objeto.nombre);
// console.log(objeto.apellido);
// console.log(objeto.edad);
// console.log(objeto.objeto1.nombre);


let persona = JSON.parse(JSON.stringify(objeto));
persona.nombre = 'Pedro'
console.log(objeto);
console.log(persona);
