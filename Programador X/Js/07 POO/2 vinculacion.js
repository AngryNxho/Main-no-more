function info(a) {
    console.log(this, a);
}

// const info = () => {
//     console.log(this);
// }

let auto = {
    modelo: 'Modelo 3',
    anho: 2021,
    marca: 'Tesla',
}




// para utilizar esto con una funcione flecha debemos hacer una vinculacion, bind, call, apply

// info.bind(auto)(); bind vincular

// info.call(auto);// call, la diferencia entre bind y call es que bind no corre la funcion a menos que nosotros la corramos, call la corre automaticamente

info.apply(auto, [10, 20]);// es igual a la forma previa con la diferencia que pasamos los argumentos en una lista
