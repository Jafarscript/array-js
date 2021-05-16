let evenNum = [2, 4, 6, 8, 10];
const doubleNum = evenNum.map(nums => nums * 2)
console.log(doubleNum);
const sum = evenNum.reduce((total, amount) => total + amount);
console.log(sum);