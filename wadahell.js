function LogistiCompany(capacity, weigth) {
  const max = capacity;

  const bigBox = 210;
  const medBox = 90;

  let bigQ = 0;
  let mediumQ = 0;

  for (let i = 0; i < capacity; i++) {
    if (bigBox <= capacity) {
      capacity -= bigBox;
      bigQ += 1;
    } else if (medBox <= capacity) {
      capacity -= medBox;
      mediumQ += 1;
    }
  }

  bigSum = bigBox * bigQ;
  midSum = mediumQ * medBox;
  total = bigSum + midSum;
  // console.log(bigSum, midSum, bigSum + midSum);
  // console.log(bigSum/weigth);
  // console.log(midSum/weigth);

  if (total <= capacity == false) {
    console.log(max, total);
    return `Big boxes: ${bigQ} - P/U ${
      Math.round(bigSum / weigth)
    }(Kg) - Small Boxes: ${mediumQ} - P/U ${(Math.round(midSum / weigth))}(Kg)`;
  } else {
    return `Not enough space on this truck. Maximun capacity is: ${capacity} and the weitgh is ${weigth}`;
  }
}

console.log(LogistiCompany(510, 110));
