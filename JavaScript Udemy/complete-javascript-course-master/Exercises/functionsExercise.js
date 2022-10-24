// // MI SOLUCION
// function checkWinner(avgDolphins, avgkoalas){
//     if (avgDolphins >= avgkoalas * 2){
//         console.log(`Dolphins wins (${avgDolphins} vs ${avgkoalas})`);
        
//     } else if (avgkoalas >= avgDolphins * 2){
//         console.log(`Koalas wins (${avgkoalas} vs ${avgDolphins})`);

//     } else {
//         console.log(`NO one wins (${avgDolphins} - ${avgkoalas})`)
//     }
// }


// const calcAverage = (dolphins, koalas) =>{
//     let averageDolphins = dolphins/3;
//     let averageKoalas = koalas/3;
//     const callback =checkWinner((averageDolphins), (averageKoalas));
//     return ``
// }

// console.log(calcAverage((44 + 23 + 71), (65 + 54 + 49)));
// console.log(calcAverage((85 + 54 + 41), (23 + 34 + 27)));

// SOLUCION DE JONAS

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);