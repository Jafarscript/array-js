const greet = 'Hello Jafar';
let newArray = Array.from(greet);
console.log(newArray);

const oddNum = [5, 7, 9, 11, 15, 19];
let modNum = Array.from(oddNum, odd => odd % 4);
console.log(modNum);

let every = oddNum.some(num => num % 9 === 0);
console.log(every);