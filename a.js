function reverseArr(arg){

    let arr = [];

    for (let x = 0; x < arguments.length; x++){
        arr.push(arguments[x]);
    }

    arrCopy = arr.map((z) => z)


    c = 0;
    i = 0;


    arrCopy = arrCopy.reverse();

    arr.forEach(e => {
        if (e == arrCopy[c]){
            i++;
            console.log(i);
        }
    })

}


console.log(reverseArr(1,3,4));