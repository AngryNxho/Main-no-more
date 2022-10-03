class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}


const listaEnlazada = new Node(1, 
    new Node(2, 
        new Node(3, 
            new Node(4,))));


//Acceder O(1); // en el peor de los casos O(n)
//Busca O(1) O(n)
//Insertar O(1)
//Borrar O(1)






//  console.log(JSON.stringify(listaEnlazada, null, 2));



// class Linkedlist{
//     length = 0;
//     head = null;

//     add(valor){
//         let nodo = new Node(valor);
//         if (this.head == null) {
//             this.head = nodo;
//         } else {
//             let curr = this.head;
//             while (curr.next){
//                 curr = curr.next;
//             }
//             curr.next = nodo;
//         }
//     this.length++;
// }

// }


// const listaEnlazadaFormal = new Linkedlist();

// listaEnlazadaFormal.add(1);
// listaEnlazadaFormal.add(2);
// listaEnlazadaFormal.add(3);
// listaEnlazadaFormal.add(4);

// console.log(JSON.stringify(listaEnlazadaFormal, null, 2));