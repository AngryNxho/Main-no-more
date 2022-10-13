class Lista {
    length = 0;
    push(item){
        this[this.length] = item;
        this.length++;
        return item;

    }

    pop(){ 
        if (this.length == 0){return undefined}
        let item = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return item;
    }

    peek(){
        if (this.length == 0) {return undefined}
        let ultimo = this[this.length - 1];
        console.log(`ultimo elemento: ${ultimo}`);
    }
}


const lista = new Lista()

lista.push('a');

lista.peek();