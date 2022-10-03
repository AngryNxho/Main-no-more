// class Lista {
    // length = 0;
    // push(item){
        // this[this.length] = item;
        // this.length++;
        // return item;
// 
    // }
// 
    // pop(){ 
        // if (this.length == 0){return undefined}
        // let item = this[this.length - 1];
        // delete this[this.length - 1];
        // this.length--;
        // return item;
    // }
// }
// 
// const lista = new Lista();

// lista.push('a');
// console.log(lista.length, lista[0]);

// lista.pop();
// console.log(lista.length);

// console.log(lista.push('b'));
// console.log(lista.length, lista[0]);

// const lista = ['a', 'b', 'c'];

//Buscar

// for (let i = 0; i < lista.length; i++) {
    // if (lista[i] === 'c'){
        // console.log(lista[i]);
        // break
    // }
// }


//Insertar O(n)

// Borrar 


class Lista {
    length = 0;

    push(item){
        this[this.length] = item;
        this.length++;
        return item;
    }


    pop(){
        if (this.length == 0) {return undefined};
        let item = this[this.length - 1];
        this.length--;
        return item;
    }



}


const lista = new Lista();

console.log(lista.push('a'))
console.log(lista)
console.log(lista.pop());
console.log(lista)
        
    