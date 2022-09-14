// class Padre {
//     constructor(nombre, apellido, soy) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.soy = soy;
//     }

//     saludo() {
//         console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`)
//     }
// }


// class Hijo extends Padre{
//     constructor(nombre, apellido, soy, tengo) {
//         super(nombre, apellido, soy);
//         this.tengo = tengo;
//     }

//     saludoHijo(){
//         console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`)
//     }
// }

// const padre = new Padre('Esteban', 'Manriquez', 'El padre')
// const hijo = new Hijo('Ignacio', 'Manriquez', 'El hijo')


// padre.saludo();
// hijo.saludoHijo();












































class Spiderman {
    constructor(nombre, anho, director){
        this.nombre = nombre;
        this.anho = anho;
        this.director = director
    }

    info(){
        console.log(`Pelicula: ${this.nombre} - anho: ${this.anho} - Director: ${this.director}`)
    }
}


const spiderman1 = new Spiderman('Spiderman 1', 2002, 'Sam Raimi')




class Spiderman2 extends Spiderman{
    constructor(nombre, anho, director, actores){
        super(nombre, anho, director);
        this.actores = actores;
    }
    
    info2(){
        console.log(`Pelicula: ${this.nombre} - anho: ${this.anho} - Director: ${this.director} - Actores: ${this.actores}`)
    }
}



const spiderman2 = new Spiderman2('Spiderman 2', 2004, 'Sam Raimi', 'Tobey Maguire - Kirsten Dunst')


spiderman1.info();
spiderman2.info2();
