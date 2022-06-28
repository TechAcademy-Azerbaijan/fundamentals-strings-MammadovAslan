const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input.split('')
    let max = 0
    let count = 0

    for(let i = 0;i<str.length;i++){
        if(str[i] === 'k'){
            count++
            if(count>max){
                max = count
            }
        }else{
            count = 0
        }
    }

console.log(max);
  
});
