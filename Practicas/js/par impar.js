function oddEven(numeros){
    let even = [];
    let odd = [];
    for (let numero of arguments ){
        if (numero % 2 == 0){
            even.push(numero);
        } else if (numero % 2 != 0){
            odd.push(numero);
        }
    }return `Even numbers: ${even} - Odd numbers: ${odd}`
}



console.log(oddEven(3,4,5,23,432,420));