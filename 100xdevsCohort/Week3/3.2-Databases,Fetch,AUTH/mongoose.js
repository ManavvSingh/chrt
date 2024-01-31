const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())
mongoose.connect('mongodb+srv://admin:dbuseradmin@cluster0.63g5c05.mongodb.net/userappnew');


const USER = mongoose.model('Users',{
    name: String,
    email: String,
    password: String
 });


app.post('/signup',async (req,res)=>{
    const username = req.body.username;
    const mail = req.body.email;
    const pwd = req.body.password;

    const existingUser = await User.findOne({ email: mail});
    if(existingUser){
        return res.status(400).send('User already exists');
    }
    const user = new USER({
        name: username,
        email: mail,
        password: pwd
    })

    user.save();
    res.json({
        "msg":"User created successfully"
    });
})

 
