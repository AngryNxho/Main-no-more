class Node{
    constructor(value, left, right){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

//      2
//   5    7
// 3  4


let raiz = new Node(2,
    new Node(7,
        new Node(2),
        new Node(6),
            new Node(5),
            new Node(11)),
    new Node(5,
        new Node(9,
            new Node(4))));


console.log(JSON.stringify(raiz, null, 2));