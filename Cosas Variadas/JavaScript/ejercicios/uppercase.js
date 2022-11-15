function upperCase(string){
    let checking = string;
    let stringContainer = [];
    stringContainer.push(string)
    let parameter = string.split(' ')
    let array = [];

    for (let i of parameter){
        array.push(i[0])
    }

    
    return array;
}


console.log(upperCase('hola mundo'));