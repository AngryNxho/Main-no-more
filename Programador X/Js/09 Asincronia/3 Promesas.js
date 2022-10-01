let promesa = new Promise((reciboDatos, noReciboDatos) => {

    setTimeout(() => {
        // reciboDatos('Muy Bien!!')
        reciboDatos('datos');
    }, 5000)
});

promesa 
    .then(texto => texto.toUpperCase())
    .then(texto => texto + '!!!')
    .then(texto => texto + ' Datos procesados otra vez')
    .then(texto => console.log(texto))
    .catch(problema => console.log(`Error: ${problema}`))
    .finally(() => console.log('Todo listo'))

console.log('Quiero ejecutar lo mas pronto possible');