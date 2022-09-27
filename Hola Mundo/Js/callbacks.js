function sumar(a, b, cb) {
    const r = a + b
    cb(r)
};


function callback(resultado) {
    console.log(`Resultado ${resultado}`);

    
}

sumar(3, 3, callback)