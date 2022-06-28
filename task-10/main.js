
const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input.split('');
    //I am programming on Javascript.
    
    if(str.includes(' ')){
        console.log(str.indexOf(' '));
        console.log(str.lastIndexOf(' '));
    }else{
        console.log(str.indexOf(' '));
    }
});