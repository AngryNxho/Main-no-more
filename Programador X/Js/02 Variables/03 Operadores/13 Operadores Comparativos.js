let a = 'a';
let b = 'b';

// console.log(a > b)
// console.log(a < b)


let A = 'A';

console.log(A < a)
console.log(A > a)
// A es mayor que a porque Js primero carga las mayusculas y luego las minusculas

console.log('z' > 'A');
console.log('z'.toUpperCase() > 'A'.toUpperCase());// Para hacer una buena comparacion de letras, es una buena idea convertirlas a letras mayusculas