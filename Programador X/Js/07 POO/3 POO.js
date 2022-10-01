let auto = {
    modelo: 'Modelo 3',
    anho: 2021,
    marca: 'Tesla',
};

let auto2 = {
    modelo: 'Hummer EV',
    anho: 2022,
    marca: 'GMC',
};


let servicio = {
    servicio: 'Transforma a mayuscula',
    transformar: function(auto){
        auto.modelo = auto.modelo.toUpperCase();
    }
}
servicio.transformar(auto2);
console.log(auto2);