// const testDoplhin = (96 + 108 + 89)/3;
// const testKoala = (88 + 91 + 110)/3;

// const testDoplhin = (97 + 112 + 101)/3;
// const testKoala = (109 + 95 + 123)/3;

const testDoplhin = (97 + 112 + 80)/3;
const testKoala = (109 + 95 +   50)/3;



if (testDoplhin > testKoala && testDoplhin >= 100){
    console.log(`Dolphin is the Winner!!`)
} else if (testKoala > testDoplhin && testKoala >= 100){
    console.log(`Koala is the Winner!! ${testKoala} `)
} else if (testDoplhin === testDoplhin && testDoplhin && testKoala >= 100){
    console.log(`Both teams are Winners, (${testDoplhin}, ${testKoala})`);
} else {
    console.log('No one wins a trophy');
}
