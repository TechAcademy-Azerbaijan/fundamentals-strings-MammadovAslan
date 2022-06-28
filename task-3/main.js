const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let num = result.input
    let twoCount = 0
    let fiveCount = 0
    num = num.split('')

    for(let i = 0;i<num.length;i++){
        if(num[i] === "2"){
            twoCount++
        }else if(num[i] ==='5'){
            fiveCount++
        }
    }

    twoCount>fiveCount ? console.log('2') : console.log('5');
});
