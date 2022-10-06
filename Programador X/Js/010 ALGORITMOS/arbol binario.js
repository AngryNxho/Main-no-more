class Node{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let raiz = new Node(2,
    new Node(5, ))

console.log(JSON.stringify(raiz, null, 2));