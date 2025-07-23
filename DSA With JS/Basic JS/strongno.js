const prompt = require('prompt-sync')()

let n = Number(prompt("Enter your no  "))

if (isNaN(n)) {
    console.log("Not valid No ");
     
}
else{
    if (n > 0) {
        let sum = 0
        let coppy = n
        while(n>0){
            let rem = n%10;
            let fact = 1

            for (let i = 0; i <= rem ; i++) {
                 fact =fact * i
            }
        
            
            sum += fact 
            n = Math.floor(n/10) 
        }
        console.log(sum , coppy);
        
    }
}