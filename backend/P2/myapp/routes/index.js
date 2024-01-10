var express = require('express');
var router = express.Router();
const userModel = require('./users')
/* GET home page. */
router.get('/',function(req,res){
  res.send('hello');
})

router.get('/create', async function(req,res){
 const user1 = await userModel.create({
    username:"ManavvSingh",
    name: "Manavendra Singh",
    age: 19
  });
res.send(user1);
})

module.exports = router;
