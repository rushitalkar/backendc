const prompt = require('prompt-sync')();

let no = Number(prompt("Enterd Your Number "))

if (isNaN(no)) {
    console.log("Invalid Input");
}
else{
    if (no > 0) {
        let sum = 0;
        while(no > 0){
            let rem = no%10;
             sum += rem
             no = Math.floor(no/10)
        }
        console.log(sum);
        
    }
}