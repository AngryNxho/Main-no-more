const reverseString = (arg) => {
    const originalString = arg;

    let convertedString = '';

    for (let x = 1; x <= originalString.length; x++){
        convertedString += (originalString[originalString.length - x]);
    };

    console.log(convertedString);

};

reverseString('AngryNxho se llama Ignacio'); 