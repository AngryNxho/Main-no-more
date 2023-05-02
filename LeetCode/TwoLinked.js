

function twoLinkedList(l1, l2){
    len = 0;

    l3 = [];

    if (l1.length > l2.length) {
        len = l1.length
    }else {
        len = l2.length;
    }

    for (let x = 0; x < len; x++) {
        result = (l1[x] + l2[x]);
        console.log(result);
    }


    return "";
}

console.log(twoLinkedList([2, 4, 3], [5, 6, 4]));
// console.log(twoLinkedList([9,9,9,9,9,9,9], [9,9,9,9]));