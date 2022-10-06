class Node{
    constructor(value, children = []){
        this.value = value;
        this.children = children;
    }
}


let raiz = new Node(1,[
    new Node(2,[
        new Node(5),
        new Node(6),
        new Node(7)
    ]),
    new Node(3),
    new Node(4, [
        new Node(8)
    ])
]);



// console.log(JSON.stringify(raiz, null, 2));


function preOrden(root){
    if (!root) return null;
    console.log(root.value);
    for (let child of root.children){
        preOrden(child);
    }

}

// preOrden(raiz);



function postOrden(root){
    if (!root) return null;
    for (let child of root.children){
        postOrden(child);
    }
    console.log(root.value);


}

// postOrden(raiz);

function bfs(root){
    if (!root) return null;
    let queue = [root];

    while (queue.length) {
        let nodo = queue.shift();
        console.log(nodo.value);
        for (let child of nodo.children){
            queue.push(child);
        }
    }
    
}

bfs(raiz);