const prompt = require('prompt-sync')();

let no1 = Number(prompt("Enterd Your First No "))

let no2 = Number(prompt("Enterd Your Second No "))

let operater = prompt("Enter Your Operater ")

if(isNaN(no1) && isNaN(no2)){
      console.log("Invalid Input");
      
}
else if (operater = "+") {
    console.log("Your Result is "+(no1 + no2));
    
}else if (operater = "-") {
    console.log("Your Result is "+no1 - no2);
    
}else if (operater = "/") {
    console.log("Your Result is "+ no1/no2);
    
}else if (operater = "*") {
    console.log("Your Result is "+no1*no2);
    
}
else{
    console.log("I cannot Calculate Value");
    
}