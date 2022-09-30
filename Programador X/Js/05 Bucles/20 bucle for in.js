// este bucle es mejor para objetos, los otros son buenos para listas pq tienen un orden

let traductor = {
    bucle: 'loop',
    lista: 'array',
    declaracion: 'delaration',
    objeto: 'object',

};

for (let etiqueta in traductor){
    console.log(`${etiqueta} en ingles es: ${traductor[etiqueta]}`);
}