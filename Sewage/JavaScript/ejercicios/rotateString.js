
function reverseString(stringg){
    const string = stringg;
    let length = string.length - 1;
    let lista = [];

    for (let i of string){
        lista.push(string[length])
        console.log(string[length]);
        length--;
    }

    for (let x of lista){
        let sumaString = '';
        sumaString += x;
    }   
    
    return lista;

}

console.log(reverseString("hola mundo"));