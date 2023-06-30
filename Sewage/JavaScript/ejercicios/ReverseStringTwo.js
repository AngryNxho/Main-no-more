function reverseString(arg) {
    const originalString = arg;

    let convertedString = '';

    for (let x = 1; x <= originalString.length; x++){
        convertedString += (originalString[originalString.length - x]);
    };

    return convertedString;
};

console.log(reverseString('de paz y convivencia LQS A través del presente, como gupo hemos reflexionado sobre nuestros actos y dinamicas de comunidad, que consideramos que atentan en contra de Ias buenas cost-umbres de amigos y de Ia buena convivencia, es por ello que nos comprometemos a: A no hacer bullying en grupo No molestat por tono de piel Exteriorizar eI sentil y respetar eI limite del Otro No molestar a quien esté ausente Con base a este compromiso, establecemos Ias bases para no transgredil eI sentir y estado emocional de nuestro amigo. -LQS')); 