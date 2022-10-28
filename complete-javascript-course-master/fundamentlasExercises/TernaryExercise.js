// const bill = 275;
// const bill = 40;
const bill = 430;

const tip15 =  0.15;
const tip20 = 0.20;


let price =   bill >= 50 && bill <= 300 
? console.log(`The Bill was ${bill}, the tip was: ${bill*tip15} and the final amount: ${(tip15 * bill) +bill}`)
: console.log(`The Bill was ${bill}, the tip was: ${bill*tip20} and the final amount: ${(tip20 * bill) +bill}`);