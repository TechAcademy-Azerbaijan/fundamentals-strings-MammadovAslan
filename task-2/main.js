const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    const num = result.input
    let first = parseInt(num[0])
    let last = parseInt(num[num.length-1])

    console.log(Math.max(first,last));
});
