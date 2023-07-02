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

    let total = (quantityBig * bigBox) + (quantitySmall * smallBox);

    console.log(total);
    console.log(capacity);

    if (total <= capacity){
        return `Cajas Grandes: ${Math.round(quantityBig)} ${(Math.round(bigBox * quantityBig)/userKg)} Kilogramos(c/u) - Cajas Medianas: ${(quantitySmall)} ${Math.round((smallBox * quantitySmall)/userKg)} Kilogramos(c/u) de los ${capacity} y usaste ${total}`
    }else{
        return `No hay suficiente espacio en el camion, el limite es de ${capacity} y llevas ${total} Cajas grandes: ${quantityBig} - Cajas medianas: ${quantitySmall}`
    }

}                                           


console.log(logistic(2500, 500, 5));