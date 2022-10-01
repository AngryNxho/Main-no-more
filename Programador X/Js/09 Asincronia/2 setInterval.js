let i = 0;
console.log('antes');
let interval = setInterval(() => {
    console.log(i++);
}, 2000);

console.log('despues');


setTimeout(() => {
    clearInterval(interval)
}, 5000);
