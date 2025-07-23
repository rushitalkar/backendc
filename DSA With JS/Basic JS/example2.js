const prompt = require('prompt-sync')();

let discount = prompt("Enterd Discount You want")

if (discount > 100) {
    console.log("Congrugilation You are Elligible");
    
}
else if (discount < 100) {
    console.log("Better Luck Next Time");
    
}
else{
    console.log("You should Go Now");
    
}