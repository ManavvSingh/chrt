const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let projects = [];

app.get('/',(req,res)=>{
    res.send('PROJECT MANAGEMENT')
})

app.get('/projects',(req,res)=>{
    res.json(projects);
})

app.post('/projects',(req,res)=>{
    let addProject = {
        id: uuidv4(),
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    }
    projects.push(addProject);
    res.status(201).send(`Created with ID: ${addProject.id}`)
})

app.get('/projects/:id',(req,res)=>{
    const findProject = projects.find(t => t.id === (req.params.id))
    if(!findProject){
        res.status(404).send();
    }else{
        res.json(findProject)
    }
})

app.listen(3000,()=>{
    console.log('App is listening on port 3000')
})