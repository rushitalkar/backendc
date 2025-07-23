const prompt = require('prompt-sync')();

let n = Number(prompt("Enter Youe factorial no"))

if (isNaN(n)) {
    console.log("You can entered invalid input");
    
}
else{

    if (n <= 0) {
        console.log("number should be greater than zero");
    }
    else{
        let ans = 1
        for (let i = 1; i <= n ; i++) {
            ans *= i
            
        }
        console.log(ans);
    }

}

console.log(1*2*3*4*5*6*7*8*9*10*11*12);
