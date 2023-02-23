


// Jonas Solution



// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   mark.calcBMI();
//   john.calcBMI();
  
//   console.log(mark.bmi, john.bmi);
  
//   // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
//   }
  



// Mi solucion despues de haberla corregido
const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height:1.69, 
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
        
    }
};

const john = {
    fullname: 'John Miller',
    mass: 92,
    height:1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
 
};

mark.calcBMI();
john.calcBMI();


if (mark.bmi > john.bmi){
    console.log(`${mark.fullname} (${mark.bmi}) is higher than ${john.fullname} (${john.bmi})`);
} else {
    console.log(`${john.fullname} (${john.bmi}) is higher than ${mark.fullname} (${mark.bmi})`);

};


