function company(capacity, weight) {
  bigBox = 210;
  midBox = 90;

  bigQuantity = 0;
  midQuantity = 0;

  for (let i = 0; i < capacity; i++) {
    if (capacity >= bigBox) {
      capacity -= bigBox;
      bigQuantity += 1;
    } else if (capacity < bigBox) {
      capacity -= midBox;
      midQuantity += 1;
    }
  }

  return `Medium ${midQuantity} - Big ${bigQuantity} with a total of ${
    midQuantity * midBox + bigQuantity * bigBox
  }`;
}

// console.log(company(500, 100));
console.log(company(1500, 0));
