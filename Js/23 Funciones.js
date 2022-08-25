let inicial = 3

function aumento(){
    inicial += 4
    return inicial
}

console.log(aumento())
console.log(aumento())
console.log(aumento())




function sumar(a,b){
    return a + b
};

console.log(sumar(3,3))


function sumar2(){
    s = 0
    for (let numero of arguments){
        s += numero;
    }
    return s;
} 

console.log(sumar2(10,10,9,2))


function restar(){
    resto = 1
    for (let numero of arguments)
    resto -= numero
    {

    }return resto
}


console.log(restar(1,3,4))



