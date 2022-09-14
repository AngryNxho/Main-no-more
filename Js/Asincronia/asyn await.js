// asyn await: Azucar sintactica (xd)
// hacen que las promesas sean mucho mas faciles de leer y de escribir

let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {
        reciboDatos('datos');
    }, 2000);
});

// promesa.then(() => {}).then(() => {})// este era el metodo que utilizabamos antes para procesar los datos, el problema es que empezamos a anidar muchas funciones

// let resultado = await promesa;
// console.log(resultado.toUpperCase());

// hemos reducido la complejidad el codigo, el unico requisito para utlizar esta palabra es que este codigo debe estar dentro de una funcion y debemos indicar que es una funcion asincrona

// async function asincorna(){
//     let resultado = await promesa;
//     console.log(resultado.toUpperCase());

// }

// asincorna();

//Otra forma de hacerlo es llamar a esta funcion inmediatamente

(async function asincorna(){
    let resultado = await promesa;
    console.log(resultado.toUpperCase());

})();

// En el video de errores aprenderemos que debemos hacer en el caso de que haya errores
