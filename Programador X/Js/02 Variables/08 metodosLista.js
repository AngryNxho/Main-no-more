// Lenght = tamanho de la lista, el primer valor empieza en el indice 0


let abecedario = ['c', 'b', 'a', 'z', 'y', 'm'];
console.log(abecedario.length);

// Ultima letra

// console.log(abecedario[abecedario.length - 1]);

// Orden alfabetico

// console.log(abecedario.sort());

// Este valor dara verdadero o falso si la lista incluye la letra b

// console.log(abecedario.includes('a'));

// Anhadir un elemento al final de la list

// abecedario.push('x');
// console.log(abecedario);
// El pop elimina el ultimo elementos de la lista

// abecedario.pop();
// console.log(abecedario);

// Agregar o remover un elemento a la lista

// abecedario.shift();
// console.log(abecedario);


// Eliminar una serie de elementos de la lista

abecedario.splice(1,2);
console.log(abecedario);