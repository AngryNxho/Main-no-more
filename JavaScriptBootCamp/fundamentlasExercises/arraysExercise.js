// MI SOLUCION
const calcTip = function(tipCalculator){
    if ( 300>= tipCalculator && tipCalculator >= 50   ){
        return tipCalculator * 0.15; 
    } else {
        return tipCalculator * 0.2; 
    }
}

// Jonas fa

const bills = [125, 555, 44];
console.log(bills);

const tips = [(calcTip(bills[0])), (calcTip(bills[1])), (calcTip(bills[2]))]


console.log(tips);


const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);                        

