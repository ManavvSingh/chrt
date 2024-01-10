const express = require('express')

const app = express();

function calcSum(n){
    let a = 0;
    for(let i = 1;i<n;i++){
    }
    a = a + i;
    return a;
}

app.get('/',function(req,res){
    const n = req.query.n; 
    const ans = calcSum(n);
    res.send(ans.toString())
})

app.listen(3000);