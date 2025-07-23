const prompt = require('prompt-sync')()

let arr = [12,24,34,54,65]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum += element
    
}

console.log(sum);

