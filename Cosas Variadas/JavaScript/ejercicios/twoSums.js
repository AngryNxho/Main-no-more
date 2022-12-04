
// Write a function twoSum that accepts two arrays as parameters. 
// Each array consists of one or more numbers between 0 and 9. 
// The function should interpret each array as a number and return the
//  sum of those two numbers.

const twoSums = (a,b) => {
    let sum = '';
    for (let i of a){
        sum+= String(i);
    }
    let sum2 = '';
    for (let x of b){
        sum2 += String(x)        
    }

    return Number(sum) + Number(sum2);
};


console.log(twoSums([1,2,3], [0,7]));


