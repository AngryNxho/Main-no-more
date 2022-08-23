let texto1 = 'texto entre comillas simple';
let texto2= "texto entre comillas inglesas";

let plantillas = "(plantillas literales)";
let texto3 = 'texto entre acentos graves ${plantillas}'; //esto permite crear texto que podemos reutilizar
console.log(texto3);


let objeto = new String('primitivo');
console.log(objeto)

console.log('primitivo'.toUpperCase())

console.log(typeof texto1)
console.log(typeof objeto)

// un objeto y untexto se comportaran de distinta manera