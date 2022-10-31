console.log('antes');

let timeOut = setTimeout(() => {
    console.log('Cualquier codigo')
},1000);

console.log('despues');

// clearTimeout(timeOut);
// esto se usa para cancelar el timeout
