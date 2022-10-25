const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Primera Solucion 

// const calcTA = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
// // 
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i]
//     if (typeof currentTemp !== 'number') continue;
//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//     // 
//   } 
//   console.log(`Numero Mayor: ${max} - Numero menor: ${min}`);
//   return max - min;
//   // 
// };
// // 
// const amplitude = (calcTA(temperatures));
// console.log(amplitude);


// Solucion de JOnas
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);


// Segunda solucion mia



const calcTA = function(temp1, temp2){

  const temps = temp1.concat(temp2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
      const currentTemp = temps[i];
      if (typeof currentTemp !== 'number') continue;
    
      if (currentTemp > max) max = currentTemp;
      if (currentTemp < min) min = currentTemp;
    }
    console.log(max, min);
    return max - min
}



const amplitudeNew  = calcTA([1,3,2], [1,3,10]);
console.log(amplitudeNew);