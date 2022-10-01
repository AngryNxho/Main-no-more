// let auto = {
    // modelo: 'Modelo 3',
    // anho: 2021,
    // marca: 'Tesla',
    // info: function(){
        // return `Este auto es el ${this.modelo}, del anho: ${this.anho} de la marca ${this.marca}}`
    // }
// }
// console.log(auto.info());

const info = () => {
    return `Este auto es el ${this.modelo}, del anho: ${this.anho} de la marca ${this.marca}}`
}

let auto = {
    modelo: 'Modelo 3',
    anho: 2021,
    marca: 'Tesla',
    info: info
    }


// function info(){
//     return `Este auto es el ${this.modelo}, del anho: ${this.anho} de la marca ${this.marca}}`
// }

console.log(auto.info());