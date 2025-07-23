const prompt = require('prompt-sync')()

let arr = []
for (let i = 0; i < 5; i++) {
    let num = Number(prompt("Enterthe Number "))
    arr.push(num)
    
}

console.log(arr);

// another way

let narr = new Array(5)

for (let i = 0; i < narr.length; i++) {
     narr[i] =  Number(prompt("Enter the no "))
    
}

console.log(narr);
