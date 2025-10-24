const prompt = require('prompt-sync')()

let start = Number(prompt("Enterthe No"))

let end = Number(prompt("Enter last no"))

let arr = []

for (let i = start; i <= end; i++) {
    arr.push(i)
    
}

for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    for (let j = 2; j < i; j++) {
        if (element % j != 0) {
            console.log(j);
            
        }
        
    }
}



