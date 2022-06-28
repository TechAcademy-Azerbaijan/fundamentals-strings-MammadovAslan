const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input
    //introduction to algorithms
    str[0] = str[0].toUpperCase()
    console.log(str);
 
});
