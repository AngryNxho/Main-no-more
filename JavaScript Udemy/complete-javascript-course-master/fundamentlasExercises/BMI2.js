
const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;



// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;


if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`)
} else {
    console.log(`Johns's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}
