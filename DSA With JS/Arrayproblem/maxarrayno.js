const prompt = require('prompt-sync')()
let array = []
for (let i = 0; i < 5; i++) {
    
    array[i] = Number(prompt("Enter the no  "))
    
}

console.log(array);

let max = 0

for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i]
    }
    
}
console.log(max);
