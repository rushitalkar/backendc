const prompt = require('prompt-sync')();

let unit = prompt("What is Bill Unit")
let amount =0
if (unit > 400) {
    amount = (unit-400) * 13
    unit = 400
}

if (unit > 200 && unit <= 400) {
    amount += (unit-200) * 8
    unit = 200
}
if (unit > 100 && unit <= 200) {
    amount += (unit-100) *6
}
 amount += unit * 4

 console.log(amount);
 