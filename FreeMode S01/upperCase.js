function upperCase(sentence){

    let a = '';
    let array = [sentence];
    for (x of arguments){
        a += x
    }


    let finalArr = '';

    for (x = 1; x < array[0].length; x++){
        if (array[0][x] == ' '){
            finalArr += ` ${(array[0][++x].toUpperCase())}`;
        }
        else{
            finalArr += array[0][x]
        }
    }
    return array[0][0].toUpperCase() + finalArr

}

console.log(upperCase('hola que hace'));