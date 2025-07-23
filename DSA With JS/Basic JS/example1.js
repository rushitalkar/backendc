const prompt = require('prompt-sync')();


let age = prompt("What is Your Age")
if (isNaN(age)) {
    console.log("Invalid Input");
    console.log("You Enterd String");
    
    
}else if (age <= 18) {
    console.log("You are Below 18 you cannot Vote");
    
}
else{
    console.log("You Can Vote");    
}