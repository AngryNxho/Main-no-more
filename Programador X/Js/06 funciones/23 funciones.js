// let inicial = 3;


// function sumar(){
//     inicial += 4;
//     return inicial;
// }

// console.log(sumar());
// console.log(sumar());
// console.log(sumar());


// function sumar(a,b){
//     return a + b;
// }

// console.log(sumar(23,3));



function sumar(){
    let suma = 0;
    for (let numero of arguments){
        suma += numero;
    } return suma;
}

console.log(sumar(23,2,1,1));