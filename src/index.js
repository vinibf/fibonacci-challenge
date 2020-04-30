'use strict'

const fibonacci = (limit = 350) => {
    let fiboList = [0, 1];
    let newElement = fiboList[fiboList.length - 1];

    while (newElement <= limit) {
        const prevElement = fiboList[fiboList.length - 2];
        newElement += prevElement;
        fiboList.push(newElement);
    }

    return fiboList;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
