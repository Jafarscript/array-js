let input = 'sea horse and sea lion';
const whalesSpeech = ['a','e','i','o','u']
const resultArray = [];
for (let i = 0; i < input.length; i++){
    // console.log('i is ' + i);
    for (let j = 0; j < whalesSpeech.length; j++){
        // console.log("j is" + j);
      if (input[i] === whalesSpeech[j]){
          if(input[i] === 'e' || input[i] === 'u'){
            resultArray.push(input[i]);
          }
          if (input[i] === 'e' || input[i] === 'u') {
            resultArray.push(input[i]); 
          }else{
            resultArray.push(input[i]);
          }
      }
    } 
  } 
console.log(resultArray.join('').toUpperCase());
// sea horse and sea lion