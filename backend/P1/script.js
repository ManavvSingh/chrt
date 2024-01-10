// const express = require('express');
// const app = express();

// app.set('view engine','ejs')

// app.get('/',(req,res) => {
//     app.render('index');
// })

// app.listen(3000);
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index', {age:15})
})

app.use(express.static('./public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})