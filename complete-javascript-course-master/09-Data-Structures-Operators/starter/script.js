'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startMenuIndex, mainIndex ){
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainIndex]]
  }

};

const arr = [2,3,4]
const [x,z,y] = arr;

console.log(x,z,y);


let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main,secondary] = [secondary, main];
console.log(main,secondary);

// Recieve 2 return values from a function
const [starter, mainCourse ] = (restaurant.order(2,0));
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p,q,r);