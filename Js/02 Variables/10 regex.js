// Expresiones regulares, dar instrucciones de como encontrar cierto tipo de texto dentro de otro texto

let texto1 = 'Me encanta la muscia de Charly Garcia.';
let texto2 = 'me encanta la muscia de Led Zeppelin.';
let texto3 = 'encanta la musica de Calle 13.';
let texto4 = 'la muscia de Meshuggah.';
let texto5 = 'Musica de Daft Punk';
let texto6 = 'Me gusta Diplo';
let texto7 = 'no me gusta Diplo';

// Tiene que ser estrictamente con la M mayuscula
// let regex = /Me/;

// Si no nos importa la mayuscual
// let regex = /Me/i;

//^ Si queremos buscar esta palabra al inicio del texto
let regex = /^Me/i;

console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));
console.log(regex.test(texto5));
console.log(regex.test(texto6));
console.log(regex.test(texto7));

