class Lista{

    length = 0;

    añadir(item) {
        this[this.length] = item;
        this.length++;
        return item; 
        
    }

    eliminar(){
        if (this.length == 0) {return undefined}
    
        this.length --; 
    }

     
}

const lista = new Lista();

lista.añadir('hola');

console.log(lista[0], lista.length);