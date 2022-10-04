class Node{
    constructor(value, children = []){
        this.value = value;
        this.children = children;
    }
}


let raiz = new Node(2, [
    new Node(7,[
        new Node(2),
        new Node(10),
        new Node(6, [
            new Node(5),
            new Node(111)
        ])
    ]),
    new Node(5, [
        new Node(9, [
            new Node(4)
        ])
    ])
])

console.log(JSON.stringify(raiz, null, 2));

