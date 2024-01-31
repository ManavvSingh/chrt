const express = require('express');
const { Admin } = require('mongodb');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://admin:dbuseradmin@cluster0.63g5c05.mongodb.net/courseSellingWebsite');



const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
});

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    courses: [CourseSchema]
})
const ADMIN_TABLE = mongoose.model('admin',AdminSchema);

app.post('/admin/signup',async (req,res)=>{
    const mail = req.body.username;
    const pwd = req.body.password;

    const existingUser = await ADMIN_TABLE.findOne({username: mail});
    if(existingUser){
        return res.status(500).send('Admin already exists');
    }

    const admin = ADMIN_TABLE({
        username: mail,
        password: pwd
    });

    admin.save();
    res.json({
        'msg':'Admin signed in'
    })
})

app.post('/admin/courses',async (req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const { title, description, price, imageLink } = req.body;

    const adminExists = await ADMIN_TABLE.findOne({username:username});
    if(!adminExists){
        return res.status(500).send('Admin does not exist');
    }

    adminExists.courses.push({
        title,
        description,
        price,
        imageLink
    })

    await adminExists.save();
    res.json({
        "msg": 'Course created successfully',
    });
})

app.get('/admin/courses',async (req,res)=>{
    const {username,password} = req.headers;
    allAdmins = await ADMIN_TABLE.find();
    let adminExists;
    for(const admin of allAdmins){
        if(!(admin.username == username && admin.password == password)){
            return res.status(500).json({
                "msg":"wrong credentials"
            });
        }else{
            adminExists = admin;
        }
    }
    res.json(adminExists.courses);
})

app.listen(3000);