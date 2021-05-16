const lettersInMyName = ['j', 'a', 'f', 'a', 'r'];
let myName = lettersInMyName.reduce((i,j) => {
    return i + '' + j;
})
console.log(myName);