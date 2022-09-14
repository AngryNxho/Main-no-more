//Otro web API, nuevamente no es parte de js

let i = 0

console.log('antes');

let interval = setInterval(() => {
    console.log(i++);
}, 2000);

console.log('Despues');



setTimeout(() => {
    clearInterval(interval);
}, 5000)

//clearInterval(interval);// Esto elimina el intervalo, de la misma forma que lo hace clearOut

//Esta fucion es muy parecidad al timeOut, la diferencia es que esta corre muchas veces dentro del tiempo que se le especifica