let markObject = {
    fullname: 'Mark Miller',
    mass: 78,
    heigh: 1.69,
    calcBMI: function(mass, heigh){
        return `${mass / heigh**2} `
    }
}

let johnObject = {
    fullname: 'John Smith',
    mass: 92,
    heigh: 1.95,
    calcBMI: function(mass, heigh){
        return `${mass / heigh**2} `
    }
}

const marksBMI =( markObject.mass / markObject.heigh **2);
const johnBMI =( johnObject.mass / johnObject.heigh **2);

console.log(marksBMI, johnBMI); 
if (marksBMI > johnBMI){
    console.log(`Mark's BMI (${marksBMI}) is higher than John's BMI (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${marksBMI})`)

}


