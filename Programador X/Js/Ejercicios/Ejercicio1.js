// / * Exercise 1 :
// * /
// //    Write a JavaScript program to check two
// //    numbers and return true if one of the number
// //    is 100 or if the sum of the two numbers is
//    100


// Mi solucion
function twoNumber(a, b){
    if ((a === 100)  || (b ===100)){
        return true
    } else if ((a + b) === 100) {
        return true
    } else {
        return false
    }
};

let a = 1;
let b = 100;

let resultado = (twoNumber(a, b));


console.log(resultado);

console.log(twoNumber(199,100))

// Solucion del video

const isEqualTo100 = ( a , b ) => a === 100 || b
=== 100 || ( a + b ) === 100 ;
console.log ( isEqualTo100 ( 100,0 ) ) ;
console.log ( isEqualTo100 ( 0,100 ) ) ;
console.log ( isEqualTo100 ( 10,0 ) ) ;
console.log ( isEqualTo100 ( 0,10 ) ) ;
console.log ( isEqualTo100 ( 20,80 ) ) ;
console.log ( isEqualTo100 ( 50,50 ) ) ;