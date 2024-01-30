const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtPassword = "123"

app.use(express.json())

const ALL_USERS = [{
    username: "john@gmail.com",
    password: "123",
    name: "john john"
},
{
    username: "jone@gmail.com",
    password: "321",
    name: "jone jone"
},
{
    username: "jam@gmail.com",
    password: "111",
    name: "jam jam"
}];

function validate(username,password){
    for(let i = 0;i<3;i++){
        if(ALL_USERS[i].username === username && ALL_USERS[i].password ===password){
            return true;
        }
    }
    return false;
}

app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    if(!(validate(username,password))){
        res.status(403).json({
            msg:"User does not exist"
        });
        return;
    }
    
    var token = jwt.sign({theEmail: username},jwtPassword);
    return res.json({
        token
    });
})

app.listen(3000);
