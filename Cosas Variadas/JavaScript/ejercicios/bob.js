function Bobby(input){
    if (input === 'How are you?'){
        return 'Sure';
    }

    else if (input == input.toUpperCase() && input.length > 0){
        return ("Whoa, chill out!, I know what i'm doing");
    }

    else if (input == ''){
        return 'Fine. Be that way!';
    }


    return 'Whatever'

};

console.log(Bobby('Mi nombre es Ignacio Manriquez'));