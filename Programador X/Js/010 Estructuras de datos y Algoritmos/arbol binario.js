class Node{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let raiz = new Node(2, 
    new Node(5, 
        new Node(3), 
        new Node(4)), 
    new Node(7))

console.log(JSON.stringify(raiz, null, 2));


function preOrden(root) {
    if (!root) return null;
    console.log(root.value);
    preOrden(root.left);
    preOrden(root.right);


}

// preOrden(raiz);



// postOrden(raiz);



function enOrden(root){
    if (!root) return null;
    enOrden(root.left);
    console.log(root.value);
    enOrden(root.right);
}


// enOrden(raiz);

function postOrden(root){
    if (!root) return null;
    postOrden(root.left);
    postOrden(root.right);
    console.log(root.value);

}

// postOrden(raiz);



function bfs(root){
    if (!root) return null;
    let queue = [root];
    while (queue.length){
        let nodo = queue.shift();
        console.log(nodo.value);
        nodo.left && queue.push(nodo.left);
        nodo.right && queue.push(nodo.right);
    }
}

bfs(raiz);