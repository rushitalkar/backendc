const prompt = require('prompt-sync')()

let prime = Number(prompt("Enter the no : "))

if (isNaN(prime)) {
    console.log("You enterd Invalid Value");
}
else{
    if (prime < 0) {
        console.log(prime ,"Number Shold Greater Than Zero");
        
    }
    else{
        let pr = true
        for (let i = 3; i <= Math.floor(prime/2); i++) {
           if (prime%i === 0) {
            console.log(i);
            
            console.log("it is not a prime no");
            
              pr = false
              
              break;
           }
           
           
        }
        if (pr) {
            console.log(prime ," It is prime no");
        }
        
    }
}

