// TIPOS DE DATOS PRIMITIVOS
let texto = 'texto';
let numero = 3.432;
let booleano = true;
let indefinido
// no muy utilizaods
let bigInt = BigInt(32423432974982379487298);
let symbol = Symbol('Simbolo');

// TIPOS DE DATOS ESTRUCTURALES
// objetos 
let objeto = {0: 'Xavier'}; //Object -> objeto[0] Una forma de identificar a los objetos es con la palabra new, esta crea un nuevo objeto
let lista = ['Xavier']; //Array -> tambien es un objeto lista[0] new array crea una nueva lista
let regex = /asd/; //es un objeto disfrazado de otro tipo/ new RegExp

// Otros objetos: Map, Set, Weakmap, WeakSet, Date, RegExp

let funcion = function() {};

// RAIZ ESTRUCTURAL PRIMITIVO
let nulo = null; 

console.log(typeof booleano);
console.log(typeof numero);
console.log(typeof texto);
