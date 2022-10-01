// var numero = 4;

// function ejemplo(){
//     var numero = 10;
//     console.log(numero);
// }

// ejemplo();
// console.log(numero);


// Ambito, var es definida en las fuciones y let en bloques {}

function numero(){
    var hola = 2;
    let numero = 2

    {
        var hola = 100;
        let numero = 100
        console.log(hola, numero)    
    } 
    console.log(hola, numero)

    
};


numero();



