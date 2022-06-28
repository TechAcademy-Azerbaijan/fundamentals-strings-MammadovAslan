
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input.split('');
    //I am programming on Javascript.
    
    for(let i = 0;i<str.length;i++){
        if(str[i] === ' '){
            lastInd = i
        }
    }
    
    for(let i = 0;i<str.length;i++){
        if(str[i] === ' '){
            firstInd = i
            break
        }
    }

    console.log(firstInd);
    console.log(lastInd);
});


// let str = "I am programming on Javascript."
// let firstInd = 0
// let lastInd = 0

// str = str.split("")

// for(let i = 0;i<str.length;i++){
//     if(str[i] === ' '){
//         lastInd = i
//     }
// }

// for(let i = 0;i<str.length;i++){
//     if(str[i] === ' '){
//         firstInd = i
//         break
//     }
// }


// console.log(firstInd);
// console.log(lastInd);
