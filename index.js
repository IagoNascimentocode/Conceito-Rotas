let express = require('express');
let app = express();
let bodyParse = require('body-parser');

let alunos =[
    {id:0, name:"Iago"},
    {id:1, name:"Diego"},
    {id:2, name:"Iuri"}
]


app.use(bodyParse.urlencoded())

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/alunos',(req,res)=>{
    res.json(JSON.stringify(alunos))
})

app.get('/aluno',(req,res)=>{
    console.log(req.body)
    let aluno = alunos[req.body.id]
    res.send(aluno)
})

app.get('/aluno/:id',(req,res)=>{
    console.log(req.params)
    let aluno = alunos[req.params.id]
    res.send(aluno)
})

app.listen(8080, () => console.log("Server Run port:8080"))