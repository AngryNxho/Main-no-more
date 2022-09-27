// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

let lista = ['gato', 'Perro', 'elefante', 'dinosaurio', 'tortuga']
// for (let i = 6; i <= 10; i += 2) {
//     console.log(i);
// }

// for (let x = 0; x < lista.length; x++){
//     let animal = lista[x];
//     if (animal === 'dinosaurio') {
//         console.log(animal, 'esta extinto')
        
//     } else {
//         console.log(animal, 'es un animal')
//     }
    
// }

// console.log('Final')


// let indiceperro;
// for (let i = 0; i < lista.length; i++) {
//     let animal = lista[i];
    
//     if (animal === 'Perro') {
//         indiceperro = i;
//         break;

//     }
// }

// console.log(indiceperro)


for (let i = 0; i < lista.length; i++) {
    let animal = lista[i];

    if (animal === 'dinosaurio') {
        continue;
    }

    console.log('animal vivo:', animal)
}