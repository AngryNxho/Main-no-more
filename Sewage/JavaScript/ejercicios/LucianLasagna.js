const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(mins){
    return EXPECTED_MINUTES_IN_OVEN - mins;
};


function preparationTimeInMinutes(layers){
    numberOfLayers = layers * 2;
    return numberOfLayers;
};


function totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
    total = (numberOfLayers * 2) + actualMinutesInOven;
    return total;
};

