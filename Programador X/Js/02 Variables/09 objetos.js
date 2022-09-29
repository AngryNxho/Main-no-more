// En JavaScipt todo es un objeto
// Un onjeto es como un diccionario
// let objeto = { 'uno': 1, 'dos dos': {}}

// Recomendable escribir el codigo de esta manera para que se pueda leer
let objeto  = {
    numero: 1,
    texto : 'texto',
    lista : [],
    boolean : true,
    
    // Tambien podemos agregar objetos dentro de objetos

    objeto : {
        objeto2 : 'hola'
    }


};


// console.log(objeto);
console.log(objeto.numero);
console.log(objeto.texto);

// Accedemos al objeto dentro del objeto
console.log(objeto.objeto.objeto2);

// borrar una propiedad

delete objeto['objeto']
console.log(objeto)


// Para representar cosas de la vida real utilizamos poo

let usuario = {
    nombre: 'Ignacio',
    apellidos: 'Manriquez Silva',
    alias: 'AngryNxho'
};

console.log(usuario)



let numero1 = 1;
let numero2 = numero1

console.log(numero1,numero2)
numero2 = 3;
console.log(numero1,numero2)

// Los objetos ocupan un lugar en la memoria
// Si quisieramos crear una copia usamos lo siguiente
let usuario2 = JSON.parse(JSON.stringify(usuario))
// Esto transforma el objeto en texto y luego lo vuelve a transformar en objeto, de esta manera creamos un nuevo objeto
usuario.alias = 'NxhoAngry'
console.log(usuario)
console.log(usuario2)
