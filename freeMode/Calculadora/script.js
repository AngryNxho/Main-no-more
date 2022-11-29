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

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    btn.style.width = '2px';
})


one.addEventListener('click', () => {
    results.textContent = 1;
});

two.addEventListener('click', () => {
    results.textContent = 2;
});

three.addEventListener('click', () => {
    results.textContent = 3;
});

four.addEventListener('click', () => {
results.textContent = 4;
});

five.addEventListener('click', () => {
    results.textContent = 5;
});

six.addEventListener('click', () => {
    results.textContent = 6;
});
   
seven.addEventListener('click', () => {
    results.textContent = 7;
});

eight.addEventListener('click', () => {
    results.textContent = 8;
});

nine.addEventListener('click', () => {
    results.textContent = 9;
});

zero.addEventListener('click', () => {
    results.textContent = 0;
});




equal.addEventListener('click', () => {
    results.textContent = 2+2;
    console.log('final');
});

del.addEventListener('click', () => {
    results.textContent = '';
    console.log('delete');
});


