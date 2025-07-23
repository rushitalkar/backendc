const prompt = require('prompt-sync')()

let neww = Array(5)

for (let i = 0; i < neww.length; i++) {
    neww[i] = Number(prompt("Enter the no  "))

}
console.log(neww);
let sum= 0
for (let i = 0; i < neww.length; i++) {
    let element = neww[i]
    sum += element
    
}
console.log("Sum of Array is "+sum);
