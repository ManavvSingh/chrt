const express = require('express')
const app = express()
const port = 3000

app.use(function(req,res,next){
    next();
})

app.get('/',function(req,res){
    // console.log(req.headers);
    res.send('<b>hi<b>')
    console.log(req)
})

app.get('/shruthi', function(req,res){
    res.send('shruthi bhondu');
})
``
app.get('/profile',function(req,res){
    res.send('This is profile page')
})

app.get('/profile/:username',function(req,res){
    res.send(`Hello from ${req.params.username}`)
})

app.listen(port)

