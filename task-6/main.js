const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input
    str = str.split(' ')
    let counter = 0

    for(let i = 0;i<str.length;i++){
        str[i] !== '' ? counter++ : counter = counter
    }
  
    console.log(counter);
});
