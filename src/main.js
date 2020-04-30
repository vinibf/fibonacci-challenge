const { fibonacci, isFibonnaci } = require('./index');

const fiboList = fibonacci();
console.log(fiboList);

const num = 54;
console.log(`O número ${num} pertence à lista? `, isFibonnaci(num));