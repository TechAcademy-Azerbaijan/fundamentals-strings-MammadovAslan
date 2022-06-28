const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input.split('');
    //I am programming on Javascript. 
    
    for(let i = 0;i<str.length;i++){
        if(str[i] === ' '){
            console.log(str.indexOf(str[i]));
            console.log(str.lastIndexOf(str[i]));
            break
        }else{
            console.log(-1);
            break
        }
    }
});
