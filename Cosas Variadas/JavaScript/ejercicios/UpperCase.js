//Write a JavaScript function that accepts a string as a parameter and con
// verts the first letter of each word of the string in upper case. 


function UpperCase(parameter){
    let string = String(parameter);
    let separator = string.split(' ');
    let list = [];

    for (let x of separator){
        list.push(x[0])
    }


    return string;
}


console.log(UpperCase('hello world'));
