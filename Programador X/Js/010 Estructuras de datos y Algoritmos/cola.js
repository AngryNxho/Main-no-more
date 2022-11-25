class Queue {
  length = 0;
  #first = 0;

  enqueue(item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  }

  dequeue() {
    let size = this.length - this.#first;
    if (size == 0) {
      return undefined;
    }

    const item = this[this.#first];
    delete this[this.#first];
    this.#first++;
    return item;
  }

  front() {
    let size = this.length - this.#first;
    if (size === 0) {
      return undefined;
    }
    return this[this.#first];
  }
}

// let cola = new Queue();

let cola = [];

console.log(cola.length);

cola.push('primero');
console.log(cola[0]);

cola.push('segundo');
console.log(cola[0]);

cola.push('tercero');
console.log(cola[0]);

console.log(cola.shift());
console.log(cola.shift());
console.log(cola.shift());
