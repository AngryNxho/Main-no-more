 let auto1 = {
    modelo: 'Modelo 3',
    anho: 2021,
    marca: 'Tesla'
 };


 
let auto2 = {
    modelo: 'Hummer EV',
    anho: 2022,
    marca: 'GMC'
 };



let servicio = {
    nombre: 'Transforma modelos a mayusculas',
    transformar: function(auto){
        auto.modelo = auto.modelo.toUpperCase()
    }
};


servicio.transformar(auto2);
console.log(auto2)