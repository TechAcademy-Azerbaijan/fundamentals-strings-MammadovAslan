const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input.split(' ')
    //introduction to algorithms
    let newStr = []
    for(let i = 0;i<str.length;i++){
        newStr.push(str[i].slice(0,1).toUpperCase()+str[i].slice(1))
    }

    console.log(newStr.join(' '));
 });





