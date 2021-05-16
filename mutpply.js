const num1 = [1,2,3,4,5,6,7,8,9,10,11,12]
const num2 = [1,2,3,4,5,6,7,8,9,10,11,12]
for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
        const output = num1[i] * num2[j];
        console.log(`${num1[i]} * ${num2[j]} = ${output}`);
        
    } 
}