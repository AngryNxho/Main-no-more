// son unas funciones que no son parte de js, son un tipo de web api, estas estan disponibles cuando trabajamos en la web, pero si ulitilizas node js tambien estaran disponilbles
// esto nos sirve para agrearle el tiempo que queremos que pase antes de que corra un linea especifica, esto nos sirve en las webs que tienen que cargar muchos datos.
//Esto no significa que bloquea el codigo, permite que continue y corre cuando ha pasado el tiempo

// console.log('Antes');

// setTimeout(() => {
//     console.log('Cualquier codigo');
// },3000);
// clearTimeout(timeout);

// console.log('Despues');



console.log('antes');

let timeout = setTimeout(() => {
    console.log('Cualquier Codigo');
}, 3000);

console.log('despues');

clearTimeout(timeout);// con esto hemos cancelado el TimeOut, es decir el codigo nunca va a correr

