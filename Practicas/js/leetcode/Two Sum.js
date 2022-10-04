function twoSum(nums, target){
    suma = 0;
    
    let lista = [];
    for (let numero  of nums){
        lista.push(numero);
    }

    for (let numero in lista){
        console.log(lista);
    }

}


console.log(twoSum([2, 7, 11, 15], 9))
// console.log(twoSum([3, 2, 3], 6)) 