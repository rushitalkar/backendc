let arr = [12,32,46,53,89]

let rev = new Array(arr.length)
let j =0
for (let i = arr.length-1; i >= 0; i--) {
    rev[j] = arr[i]
    j++

}
console.log(rev);