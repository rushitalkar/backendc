const prompt = require('prompt-sync')();
//This is Addition of natuaral numbers
let n = Number(prompt("n the term"))


if (isNaN(n)) {
    console.log("You enterd Invalid Input");
    
}else{
    if (n < 0) {
        console.log("Number Should be Greater than 0");
        
    }
    else{
        let ans = 0 //we can declare this varible above if else thrn it makes garbage value
        for (let i = 1; i <= n; i++) {
            ans += i //here we can store addition of all no
            
        }
        console.log(ans);
        
    }
}

