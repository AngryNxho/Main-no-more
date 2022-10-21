
function ascii(valor){
    
    let letra = valor.charCodeAt();

    letra +=1;

    if (127 > letra > 0) {
        return  String.fromCharCode(letra);

    }else{
        return `has excedido el valor maximo`;
    }
};


console.log(ascii("y"));



