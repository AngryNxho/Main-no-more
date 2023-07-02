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
    
    if (total <= capacity){
        return `Cajas Grandes: ${quantityBig} - ${sumA / quantityBig}(Kg) que por pedido del usuario seran divididas en ${Math.round((sumA/quantityBig)/userKg)}(Kg) c/u
Cajas Medianas: ${quantitySmall} - ${sumB / quantitySmall}(Kg) que por pedido del usuario seran divididas en ${Math.round((sumB/quantitySmall)/userKg)}(kg) c/u`
    }else{
        return (`Excede el maximo soportado por el camion. ${sumA+sumB} de ${capacity}`);
    }

}                                           


console.log(logistic(510, 110, 21));