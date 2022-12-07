function Transcription(letter){
    let array = [];

    for (let i = 0; i < letter.length; i++){
        if (letter[i] === 'G'){
            array += 'C'
        }

        else if(letter[i] === 'C'){
            array += 'G'
        }
    
        else if (letter[i] === 'T'){
            array += 'A'
        }

        else {
            array += 'U'
        }
    };

    return array;
};

console.log(Transcription(['G', 'C', 'T', 'A']));
