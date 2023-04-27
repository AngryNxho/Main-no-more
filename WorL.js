let arr = [6,5,7,8,9,3];
let index = [];


for (let x of arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] + x == 10 && arr[i] != x){
            console.log(`${arr[i]} + ${x} = ${x + arr[i]}`);
            index.push(i)
            index.sort()
        }
        
    }
}

console.log(index);