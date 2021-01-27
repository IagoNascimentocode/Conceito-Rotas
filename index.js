var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var aluno = require('./router/aluno')



app.use(bodyParse.urlencoded())

app.use('/aluno',aluno)
app.get('/', (req,res)=>{
    res.send("Hello World")
})


app.listen(8080, () => console.log("Server Run port:8080"))