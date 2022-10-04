function twoSum(numbers, result){
    let lista = [];
    let suma = 0;

    for (let numero of numbers){
        lista.push(numero);
    }; 


    for (let x = 0, y = 1; x <= lista.length && y < lista.length; x++, y++){
        if (lista[x] + lista[y] == result){
            return [x, y];
        } 

    }
}


console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

