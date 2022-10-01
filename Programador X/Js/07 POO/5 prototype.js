function Auto(modelo, anho, marca){
    this.modelo = modelo;
    this.anho = anho;
    this.marca = marca;
    // this.info = function(){
    //     return `${this.modelo} - ${this.anho} - ${this.marca}`
    // }
}


Auto.prototype.info = function(){
    return `${this.modelo} - ${this.anho} - ${this.marca}`
}

const auto1 = new Auto('Hummer', 2022, 'GMC');
const auto2 = new Auto('Modelo 3', 2022, 'Tesla');

console.log(auto1.info());
console.log(auto2.info());