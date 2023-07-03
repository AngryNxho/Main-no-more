function Lista(numeros, indice){
    let lista = [];
    let lista2 = [];
    for (let i of arguments){
        lista.push(i);
    }

    listaUno = lista[0];

    let lengthLista1 = listaUno.length - 1;
    
    for (let x = 0; x <= lengthLista1; x++){
        if (listaUno[x] !== indice){
            lista2.push(listaUno[x])
        }
    }



    return `Lista 2: ${lista2}`;
}
console.log(Lista([1,2,3,4],4));

