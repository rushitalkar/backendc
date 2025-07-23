const prompt = require('prompt-sync')();

let no1 = Number(prompt("Enterd Your First No "))

let no2 = Number(prompt("Enterd Your Second No "))

let operater = prompt("Enter Your Operater ")

if (operater = "+") {
    console.log(no1 + no2);
    
}else if (operater = "-") {
    console.log(no1 - no2);
    
}else{
    console.log("I cannot Calculate Value");
    
}