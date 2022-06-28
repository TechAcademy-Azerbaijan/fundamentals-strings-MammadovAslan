// Use these variables in your code

let s = "This is a cat sitting on a table"
s = s.toLowerCase()
let c = "t"
let counter = 0

for(let i = 0;i<s.length;i++){
    if(s[i] === c){
        counter++
    }
}

console.log(counter);