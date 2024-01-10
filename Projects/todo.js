const express = require('express');
const app = express();

let todos = [{
    id:1,
    title: 'task1',
    desc: 'this is task1'
},{
    id:2,
    title: 'task2',
    desc: 'this is task2'
}]

app.use(express.json());

app.get('/',function(req,res){
    res.send(todos)
})

app.get('/todoid/:id',function(req,res){
    const UserID = req.params.id;
    function findID(UserID){
        let found;
        intID = parseInt(UserID);
        for(let i = 0;i<todos.length;i++){
                if(todos[i].id == intID){
                    found = true
                    // res.send(todos[i]);
                    const todo = todos[i]
                    res.json(todo)
                }
            }
            if(found==false){
                res.sendStatus(404);
            }
    }
    findID(UserID);
    // res.send(id)
})

app.post('/todos', function (req, res) {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        desc: req.body.desc
    };
    todos.push(newTodo);
    res.json(todos); // Return the entire todo object
});

app.put('/todos/:id',(req,res)=>{
    const UserID = req.params.id;
    function findID(UserID){
        let found;
        intID = parseInt(UserID);
        for(let i = 0;i<todos.length;i++){
                if(todos[i].id == intID){
                    found = true;
                    todos[i].title = req.body.title;
                    todos[i].desc = req.body.desc;
                    res.json(todos);
                }
            }
            if(found==false){
                res.sendStatus(404);
            }
    }
    findID(UserID);
})

app.delete('/todos/:id',(req,res)=>{
    const UserID = req.params.id;
    function findID(UserID){
        let found;
        intID = parseInt(UserID);
        for(let i = 0;i<todos.length;i++){
                if(todos[i].id == intID){
                    found = true;
                    todos.splice(i,1);
                    res.json(todos);
                }
            }
            if(found==false){
                res.sendStatus(404);
            }
    }
    findID(UserID);
})

app.listen(3000);