// let promesa = new Promise((reciboDatos, noReciboDatos) => {
    // setTimeout(() => {
        // reciboDatos('datos1');
    // },5000)
// });
// 
// 
// async function asincrona(){
    // let resultado = await promesa;
    // console.log(resultado.toUpperCase());
// 
// }
// 
// asincrona();

async function recibirCelulares(){
    const celulares = await obtenerDatos;
    console.log(celulares);
}

recibirCelulares();
