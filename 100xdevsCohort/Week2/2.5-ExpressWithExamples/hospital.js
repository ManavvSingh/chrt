const express = require('express');
const app = express();


const users = [{
    name: 'shruthi ',
    kidneys: [{
        healthy: true
    }]
}];

app.use(express.json());

app.get('/',function(req,res){
    const user1Kidney = users[0].kidneys.length;
    let numberofHealthykidneys = 0;
    for(let i = 0;i<user1Kidney;i++){
        if(users[i].healthy){
            numberofHealthykidneys += 1;
        }
    }
    const numberofUnhealthykidneys = user1Kidney - numberofHealthykidneys;
    res.json({
        name : users[0].name,
        user1Kidney,
        numberofHealthykidneys,
        numberofUnhealthykidneys
    })
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    console.log(users[0]); 
    res.sendStatus(201);      
})

// convert all unhealthy kidneys into healthy
app.put('/',function(req,res){
    for(let i = 0;i < users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    console.log(users[0])
    res.json({});
})

app.delete('/',function(req,res){
    const newKidneys = [];
    for(let i = 0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                'healthy': true
            });
        }
    }
    users[0].kidneys = newKidneys
    console.log(users[0]);
    res.json({})
})
app.listen(3000);

// console.log(users[0].kidneys.length) 