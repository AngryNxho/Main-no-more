function twoSums(nums, target = 0){
    let lista = [nums];
    let indices = [];
    
    let i = 0;
    let x = 1;
    let y = 1
    let yy = 2;
    // let resultado = lista[0][i] + lista[0][x];

    for (let comprobar of nums){
        if (lista[0][i] + lista[0][x] !== target){
            // console.log('primer if');
            x +=1;
            
            if (lista[0][y] + lista[0][yy] === target){
                // console.log('segundo if')
                indices.push(y, yy);
                break
            }
        // [3, 2, 4] = 6
        // 0   1  2
        } 
        else if (lista[0][i] + lista[0][x] === target){
        // console.log('segundo if');
        indices.push(i, x);
        break
        } 
        
    }    

    // console.log(lista[0][0], lista[0][1]);
    
    return indices;
}

console.log(twoSums([2, 7, 11, 15], 9)); 
console.log(twoSums([3, 2,4], 6)); 
console.log(twoSums([3,3], 6)); 0, 1
