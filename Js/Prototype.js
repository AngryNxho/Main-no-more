function Auto(modelo, anho, marca) {
    this.modelo = modelo;
    this.anho = anho;
    this.marca = marca;

}
    // si quisieramos anhadir un metodo, podriamos hacer estos:

//     this.info = function() {
//         return this.modelo + ' - ' + this.anho + ' - ' + this.marca;
//     }
// }

// como podemos ver funciona, el problema es que cada vez que se crea un objeto, se recrea la funcion y esto no es muy eficiente, al darnos cuenta de esto empezamos a ver un poco de optimizacion
// no es necesario correr muchisimas veces estas lineas cada vez que creamos un nuevo auto, lo optimizaremos  de la siguiente forma

Auto.prototype.info = function() {
    return this.modelo + ' - ' + this.anho + ' - ' + this.marca;
}
// todos los objetos tienen algo que se llama prototipo, esto es algo muy unico en js, js trabaja con herencia de prototipos y no clasica
// al aplicar el prototipo podemos ver que el resultado es el mismo con la gran diferencia de que todos estos autos comparten el mismo metodo porque lo anhadimos la prototipo.

const auto1 = new Auto('Modelo 3', 2021, 'Tesla');
const auto2 = new Auto('Hummer EV', 2022, 'GMC');

console.log(auto1.info());
console.log(auto2.info());



