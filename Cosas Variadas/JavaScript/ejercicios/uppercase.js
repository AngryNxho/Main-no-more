function upperCase(string){
    let checking = string;
    let stringContainer = [];
    stringContainer.push(string)
    let parameter = string.split(' ')
    let array = [];

    for (let i of parameter){
        array.push(i[0])
    }

    let sum = [];


    for (let x = 0; x < checking.length; x++){
        if (array.includes(checking[x])){
            
            array.shift();

            sum+= checking[x].toUpperCase();
        } else{
            sum+= checking[x];
            array.unshift();
        }
    }    
    return sum;
}


console.log(upperCase('hola mi nombre es ignacio manriquez'));