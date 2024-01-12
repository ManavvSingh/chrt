const express = require('express');
const app = express();

app.get('/health-checkup',(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;


    if (username!= 'manav' || password!= "pass"){
        res.status(400).json({
            "msg" : "something wrong"
        })
        return
    }
    
    if(kidneyId!= 1 && kidneyId != 2){
        res.status(400).json({
            "msg" : "something wrong"
        })
        return
    }
    res.json({
        msg: "your kidney is fine"
    })
}); 




app.listen(3000);