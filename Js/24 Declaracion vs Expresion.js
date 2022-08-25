
function sumar(a,b){
    return a + b;
}

let sumar2 = function(a,b){
    return a + b;
}


console.log(sumar(1,2), sumar2(1,2))
// la function puede ser accedida antes de ser declarada, pero la expresion de una funcion  no
// Usa declaraciones cuando desees crear una función en el ámbito global y hacer que esté disponible en todo tu código. Usa expresiones para limitar la disponibilidad de la función, manteniendo su alcance global ligero y manteniendo una sintaxis limpia.