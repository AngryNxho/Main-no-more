// Este bucle es mejor para objetos, los otros para listas

let traductor = {
    bucle: 'loop',
    lista: 'array',
    declaracion: 'declaration',
    objeto: 'object'
};

for (let etiqueta in traductor) {
    console.log(etiqueta, 'en ingles es: ', traductor[etiqueta])
}