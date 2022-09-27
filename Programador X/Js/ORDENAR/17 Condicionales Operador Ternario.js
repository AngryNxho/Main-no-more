// let usuario = 'Emilia'

// let autorizado = usuario === 'Emilia' ? 'Autorizado' : 'No Autorizado';
// console.log(autorizado)


// Segunda forma
// let autorizado = usuario === 'Emilia'
// ? 'Autorizado'
// : usuario === 'Pedro'
//     ? 'Autorizado' : 'No Autorizado';

//     console.log(autorizado)


// Tercera Forma, pero no es tan facil de leer

// let autorizado = usuario === 'Emilia'
// ? 'Autorizado'
// : (usuario === 'Pedro' ? 'Autorizado' : 'No Autorizado');

//     console.log(autorizado)
    

usuario = 'Chile';
let si = usuario === 'Chile'
? 'Si'
: usuario === 'Argentina'
    ? 'Autorizado' : 'No autorizado'
    console.log(si)