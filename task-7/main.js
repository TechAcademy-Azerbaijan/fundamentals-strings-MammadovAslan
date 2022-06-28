const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let str = result.input
    //kpkkp
    str = str.split('')

    for(let i = 0;i<str.length;i++){
        let counter = 1
        if(str[i] == str[i+1]){
            counter++
        }
    }

    console.log(counter);
  
});
