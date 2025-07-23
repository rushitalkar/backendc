const prompt = require('prompt-sync')();

let rs = prompt("Enter Your Rs")

let extrarupee = 0

if (rs > 500) {
    console.log("Notes of 500 ",Math.floor(rs/500)); 
    rs = rs%500
    console.log("reminder",rs);
}
if (rs>200) {
    console.log("Notes of 200 ",Math.floor(rs/200));
    rs = rs%200
    console.log("reminder",rs);
    
}
if (rs > 100) {
    console.log("Notes of 100 ",Math.floor(rs/100));
    rs = rs%100
    console.log("reminder" , rs);
    
}
if (rs > 50) {
    console.log("Notes of 50 ",Math.floor(rs/50));
    rs = rs%50
    console.log("reminder" , rs);
}
if (rs > 10) {
    console.log("Notes of 10 ",Math.floor(rs/10));
    rs = rs%10
    console.log("reminder" , rs);
}
if (rs > 5) {
    console.log("Notes of 5 ",Math.floor(rs/5));
    rs = rs%5
    console.log("reminder" , rs);
}

console.log("Coins are ",rs)




