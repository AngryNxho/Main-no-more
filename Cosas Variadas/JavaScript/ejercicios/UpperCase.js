//Write a JavaScript function that accepts a string as a parameter and con
// verts the first letter of each word of the string in upper case. 


function UpperCase(parameter){

    let string = String(parameter);
    string = string.split(' ');
    for (let i in string){ 
        console.log(string[i][0].toUpperCase());
    }
    

    return ;
}


console.log(UpperCase('hello world'));
