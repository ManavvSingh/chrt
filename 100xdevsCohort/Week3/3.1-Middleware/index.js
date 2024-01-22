const express = require('express');
const zod = require('zod');
const app = express();
app.use(express.json()); 

// app.get('/health-checkup',(req,res)=>{
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;


//     if (username!= 'manav' || password!= "pass"){
//         res.status(400).json({
//             "msg" : "something wrong"
//         })
//         return
//     }
    
//     if(kidneyId!= 1 && kidneyId != 2){
//         res.status(400).json({
//             "msg" : "something wrong"
//         })
//         return
//     }
//     res.json({
//         msg: "your kidney is fine"
//     })
// });

// ZOD
const sc = zod.array(zod.number());

// MIDDLEWARE
function checkid(req,res,next){
    const id = req.headers.id;
    if(id == 'user'){
        next();
    }else{
        res.send('error')
    }
}
app.get('/health-checkup',checkid,function(req,res){
    res.send('kidney site');
})

function validate(req,res,next){
    const kidney = req.body.kidney;
    const response = sc.safeParse(kidney)
    if(!response.success){
        res.json({
            response
        })
    }else{
        next()
    }
}
app.post('/health-checkup',validate, function(req,res){
    const kidney = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send(`You have ${kidneyLength} kidneys`)
})

// GLOBAL CATCHES
app.use((error,req,res,next)=>{
    console.log(error);
    res.status(500).send('an internal error occured');
});



app.listen(3000);