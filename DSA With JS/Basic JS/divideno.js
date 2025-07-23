const prompt = require('prompt-sync')()

let n = Number(prompt("Which no facts do you want "))

if (isNaN(n)) {
    console.log("You can entered invalid input ");
    
}else{
    if (n < 0) {
        console.log("no shuld be greater than zero ");
        
    }
    else{
        for (let i = 0; i <= Math.floor(n/2); i++) {
           if (n%i == 0) {
              console.log(i);
              
           }
        }
        console.log(n);
    }

}