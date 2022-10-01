
class Padre{
    constructor(nombre, apellido, soy){
        this.nombre = nombre;
        this.apellido = apellido;
        this.soy = soy;
    
    }

    saludo = function() {
        return `Me llamo ${this.nombre}, mi apellido es ${this.apellido} y soy el ${this.soy}`
        
    }
}


class Hijo extends Padre{
    constructor(nombre, apellido, soy,tengo){
        super(nombre, apellido, soy);
        this.tengo = tengo;
    }


    saludoHijo = function(){
        return `Me llamo ${this.nombre}, mi apellido es ${this.apellido} y soy el ${this.soy} y tengo ${this.tengo} anhos`

    }

}
const padre = new Padre('Esteban', 'Manriquez', 'El padre');
const hijo = new Hijo('Ignacio', 'Manriquez', 'El hijo', 21);

console.log(padre.saludo());
console.log(hijo.saludoHijo());
