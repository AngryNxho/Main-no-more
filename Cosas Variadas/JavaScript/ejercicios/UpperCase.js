//Write a JavaScript function that accepts a string as a parameter and con
// verts the first letter of each word of the string in upper case. 


function UpperCase(parameter){
    let string = String(parameter);
    string = string.toUpperCase()
    let string2 = string.split(' ');
    let list = [];
    for (let i in string2){ 
        list.push(string.toUpperCase());
    }

    return list
    
}


console.log(UpperCase('hello world'));
