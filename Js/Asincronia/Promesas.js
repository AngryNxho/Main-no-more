// Todo lo visto hasta ahora ha sido sincrono, esto significa que cada linea de codigo corre y despues avanza hacia la siguiente, ninguna linea bloquea
// Ejemplo:

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// Cada uno corre despues del otro, pero en Js tambien tenemos una situacion en la que tenemos asincronia



// console.log(1)
// console.log(2)
//                     console.log(3)// SI esta linea se llegara a demorar, las lineas 17 y 18 estarian bloqueadas
// console.log(4)
// console.log(5)

// Imaginemosnos que vamos y pedimos datos a un servidor y estos datos se demoran 1 minuto en regresar, que hace el usuario?, lo dejamos con la pagina congelada, se bloquea el navegador
// esto es lo que debemos evitar, por eso existe la asincronia en Js, es una manera de correr cierto codigo y no cortar el flujo del resto del codigo
// Las promesas son unas de las herramientas principales para esto.

// Ejemplo

// let promesa = new Promise((seCumple, noSeCumple) => {
//     // seCumple('Muy Bien!!')
//     noSeCumple('Muy Mal!')
// });


// promesa
//     .then(texto => console.log(texto))// las promesas tienen un metodo llamado then, que es como una promesa verdadera, alguien hace una promesa y en algun momento se cumple, o no se cumple
//     .catch(problema => console.log('X '+ problema));



// Lo interesante de las promesas es que estas se pueden demorar mucho tiempo en ser cumplidas, como pedir que el servidor nos envie datos y yo necesito hacer otras cosas

let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {// con esto lo que hacemos es que luego de 5 segundos, corre el codigo 
        reciboDatos('datos');
    }, 5000);
});

promesa
    .then(texto => texto.toUpperCase())// algo muy util en las promesas es que podemos seguir encadenando metodos
    .then(texto => texto + '!!!')
    .then(texto => console.log(texto))// las promesas tienen un metodo llamado then, que es como una promesa verdadera, alguien hace una promesa y en algun momento se cumple, o no se cumple
    .catch(problema => console.log('Error: '+ problema))
    .finally(() => console.log('Todo Listo!'))// finally corre cuando la promesa se ha completado completamente

// Estas promesas al ser asincronas se pueden demorar mucho tiempo y nosotros queremos que el usuario tenga un feedback

console.log('Quiero ejecutar lo mas pronto possible')// esto fue ejecutado inmediatamente mientras la promesa se esta procesando

//con las promesas trabajamos de la siguiente manera. Creamos una promesa, una vez que se cumpla, aplica el then

