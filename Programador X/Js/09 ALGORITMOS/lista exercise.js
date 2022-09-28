class Lista{
    length = 0

    añadir(elemento){
        this[this.length] = elemento;
        this.length++;
        return this.length;
    }

    eliminar(){
        if (this.length == 0) {return undefined}
        let item = this[this.lista - 1];
        delete this[this.length - 1];
        this.length--;
        return item
        }
}

const lista = new Lista();

lista.añadir('a');
console.log(lista[0], lista.length);

lista.eliminar('a');
console.log(lista[0])