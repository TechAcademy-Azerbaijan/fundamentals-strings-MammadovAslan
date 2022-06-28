const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    const num = result.input.split(',')
    const a = parseInt(num[0])
    const b = parseInt(num[1])
    const c = parseInt(num[2])

    console.log(Math.min(a,b,c));
  
});
