class Stack {

    length = 0;

    push(item){
        this[this.length] = item
        this.length++;
        return item;
    }


    pop() {
        if (this.length == 0) {return undefined};

        const item = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return item;
    }

    peek(){
        if (this.length == 0) {return undefined}
        return this[this.length-1];
    }
}

let pila = new Stack();


console.log(pila.length);

pila.peek();

pila.push('hola');

console.log(pila[0], pila.length);

