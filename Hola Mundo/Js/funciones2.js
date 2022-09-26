function suma(a, b) {
    return a + b
};


const resultado1 = suma(1, 2);
const resultado2 = suma(3, 2);
const resultado3 = suma(resultado1, resultado2);

console.log(`Resultado ${resultado3}`);