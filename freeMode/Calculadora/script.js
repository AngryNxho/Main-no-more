let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let results = document.querySelector('p');
let equal = document.querySelector('.equal');
let del = document.querySelector('.delete');




one.addEventListener('click', () => {
    results.textContent = 1;
});

two.addEventListener('click', () => {
    results.textContent = 2;
});

three.addEventListener('click', () => {
    results.textContent = 3;
});




equal.addEventListener('click', () => {
    results.textContent = 2+2;
    console.log('final');
});

del.addEventListener('click', () => {
    results.textContent = 0;
    console.log('delete');
});


