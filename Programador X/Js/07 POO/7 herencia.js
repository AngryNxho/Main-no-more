function Padre(nombre, apellido, soy){
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy;
}

Padre.prototype.saludo = function(){
    return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - soy el: ${this.soy} `
}

Hijo.prototype.saludoHijo = function(){
    return `Nombre: ${this.nombre} - Apellido: ${this.apellido} - soy el: ${this.soy} - edad: ${this.tengo} `

}


function Hijo(nombre, apellido, soy, tengo){
    Padre.call(this, nombre, apellido, soy);
    this.tengo = tengo;

}




const padre = new Padre('Esteban', 'Manriquez', 'El padre');
const hijo = new Hijo('Ignacio', 'Manriquez', 'El hijo', 21);


console.log(padre.saludo());
console.log(hijo.saludoHijo());


