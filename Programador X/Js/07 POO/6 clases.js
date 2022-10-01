// class Auto {
//     constructor(modelo, anho, marca){
//         this.modelo = modelo;
//         this.anho = anho;
//         this.marca = marca;
//     }
    
//     info() {
//         return `${this.modelo} - ${this.anho} - ${this.marca}`
//     }
// }

// const auto1 = new Auto('Hummer', 2022, 'GMC');
// const auto2 = new Auto('Modelo 3', 2022, 'Tesla');

// console.log(auto1.info());
// console.log(auto2.info());



class Juegos {

    constructor(nombre, anho, productor){
        this.nombre = nombre;
        this.anho = anho;
        this.productor = productor;
    }
    

    info(){
        return `${this.nombre} - ${this.anho} - ${this.productor}`
    }

}

const juego1 = new Juegos('Bo 2', 2012, 'Treyarch');
const juego2 = new Juegos('Fifa 22', 2022, 'Ea Sports');

console.log(juego1.info());
console.log(juego2.info());