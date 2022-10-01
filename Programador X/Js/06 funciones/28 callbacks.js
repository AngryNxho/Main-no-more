// function llamar(callback){
    // callback(33);
// }
// 
// llamar(console.log);


// function llamar(callback, a){
    // callback(33 + a);
// }
// 
// llamar(console.log, 100);

// ES RECOMENDABLE EVITAR LOS CALLBACKS, PERO HABRAN SITUACIONES EN LAS QUE SERAN UTILES POR EJ:    

function llamar(Exito, Error){
    let exito = true;

    if (exito) {
        Exito();
    } else {
        Error();
    }
}

llamar(
    function() {console.log('Exito');},
    function () {console.log('Error')}
);

