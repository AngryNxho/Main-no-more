let username =  '';

function createUser(){

    if (username.length >= 6 && username.trim('')){
        return true;
    } else {
        return false;
    }
}

console.log(createUser());