// && = Y / || = O
let a = 'java';
let b = 'javascript';
let c = 'c#';

// console.log(a === 'java' && b === 'javascript');
// console.log(a === 'java' || b ==='go');
console.log((c === 'c#' || b === 'go') && b === 'javascript');

console.log(c !== 'c#' && a !== 'javascript');
console.log(!(c === 'c#' || a === 'javascript'));// el simbolo de exclamacion se utilizar para que nos de lo contrario, por ejemplo en esta linea todo es true, pero con ! nos sale false