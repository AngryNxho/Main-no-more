function logistic(capacity, weight, user){
    
    let truckMax = capacity;
    let weightUser = weight;
    let userKg = user


    const bigBox = 210;
    const smallBox = 90;

    
    let quantityBig = 0;
    let quantitySmall=0;
    
    let totalMax = Math.round(capacity/weight)
    
    for (let i = 0; i < truckMax; i++){
        if (truckMax > weightUser){
            truckMax -= bigBox;
            quantityBig += 1;
        }else{
            truckMax -= smallBox;
            quantitySmall += 1;
        }
    }


    sumA =  (quantityBig * bigBox);
    sumB =  (quantitySmall * smallBox);

    let total = (sumA) + (sumB);
    
    return `Cajas Grandes: ${quantityBig} - ${sumA / quantityBig}(Kg) divididas equitativamente en ${Math.round(total/quantityBig)/userKg}(Kg) c/u `

}                                           


console.log(logistic(510, 210, 5));