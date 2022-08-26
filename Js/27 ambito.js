// var numero = 4

// function ejemplo(){
//     var numero = 10;
//     console.log(numero);
// }

// console.log(numero);
// ejemplo();

// como podemos ver hemos declarado tanto globalmente, como, localmente, en este caso si accedemos a la variable local numero es igual a 10
// pero si accedemos a la variable global numero es igual a 4, es importante poner que numero es una variable pq si no pusieramos var,
//simplemente se sobre escribiria y numero seria igual a 10 todo el tiempo

var numero = 4

function ejemplo(){
    var numero = 10;
    console.log(numero);

    function dentro(){

    }
    dentro();

}

// la funcion dentro seria una variable local dentro de otra funcion, tambien tenemos que tener cuidado de no sobreescribir un metodo,
// por ejemplo, el metodo log, si dijieramos que console es una funcion, al imprimir console.log() este metodo habria sido sobreescrito


console = function(){
    
}