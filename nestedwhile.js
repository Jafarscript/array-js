const newArray = [10, 20, 30, 40, 50,]
const digitNum = [1,2,3,4,5,6,7,8,9]
let i = 0;
while (i< newArray.length) {
    let j = 0;
    while (j < digitNum.length) {
        const output = newArray[i] * digitNum[j];
        console.log(`${newArray[i]} * ${digitNum[j]} = ${output}`);
        j++;
    }
    i++;
}