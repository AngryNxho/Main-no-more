//Write a JavaScript function that accepts a string as a parameter and con
// verts the first letter of each word of the string in upper case. 


function UpperCase(parameter){

    let string = String(parameter);
    let string2 = string.split(' ');
    let list = [];
    for (let i in string2){ 
        list.push(string2[i][0].toUpperCase());
    }
    
    for (let x = 0; x < string.length; x++){
        if (list.includes(string[x].toUpperCase())){
            console.log(string[0].replace(string[x], string[x].toUpperCase()))
        }
    }
    return list;
    
}


console.log(UpperCase('hello world'));
