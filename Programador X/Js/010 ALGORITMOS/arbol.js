class Node{
    constructor(value, children = []){
        this.value = value;
        this.children = children;
    }
}


let raiz = new Node(1, [
    new Node(2, [
        new Node(5),
        new Node(6), 
        new Node(7)
    ]),
    new Node(3),
    new Node(4, [
        new Node(8)])

])