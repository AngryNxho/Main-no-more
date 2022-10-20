function hasDuplicates(numbers){
    let lista = [];
    let dos = [];
    for (let i of arguments){
        lista.push(i);
    }

    for (let x = 0; x < lista.length; x++){        
// 
        if (!(lista[x] in dos) == true){
            console.log(`${lista[x]} no esta`)
            dos.push(lista[x])
        } else {
            console.log('si esta')
        }
    
    }

    return lista;
}


console.log(hasDuplicates(1,1,3));