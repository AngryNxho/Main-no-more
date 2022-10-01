let promesa1 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {reciboDatos('datos1');},5000)
});

let promesa2 = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {reciboDatos('datos2');},2000)
});

Promise.all([promesa1, promesa2])
    .then((lista) => {
        console.log(lista);
    });

