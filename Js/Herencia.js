// function Padre(nombre, apellido, soy) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.soy = soy;
// }


// Padre.prototype.saludo = function () {
//     console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`)

// }


// function Hijo(nombre, soy, tengo) {
//     Padre.call(this, nombre, null, soy);
//     this.tengo = tengo;
// }

// const padre = new Padre('Esteban Luis', 'el padre');
// const hijo =  new Hijo('Carlos Irwing', 'el hijo', 55);

// console.log(padre);
// console.log(hijo);






function Bdd(nombre, nCLiente, edad) {
    this.nombre = nombre;
    this.nCLiente = nCLiente;
    this.edad = edad;
}


Bdd.prototype.info = function(){
    console.log(`El nombre es ${this.nombre} - El numero de cliente es: ${this.nCLiente} y la edad es ${this.edad}`)
}


function programacion(nombre, nCLiente, edad, lenguaje, universidad) {
    Bdd.call(this, nombre, nCLiente, edad)
    this.lenguaje = lenguaje;
    this.universidad = universidad;

}


const son = new Bdd('Ignacio Manriquez', 42342, 21)
const father = new programacion('Lucas Manriquez', 42432, 12, 'JavaScript', 'U de chile')

console.log(son)


console.log(father)