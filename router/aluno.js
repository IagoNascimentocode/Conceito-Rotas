const express = require('express')
const router = express.Router()



let alunos =[
    {id:0, name:"Iago"},
    {id:1, name:"Diego"},
    {id:2, name:"Iuri"}
]

router.get('/',(req,res,next)=>{
    console.log(req.body.id)

    let aluno = alunos[req.body.id]
    if(aluno){
        res.json(aluno)
    }else{
        next()
    }
})
router.get('/', (req,res,next)=>{
    console.log(req.query.id)

    let aluno = alunos[req.query.id]
    if(aluno){
        res.json(aluno)
    }else{
        console.log("Aluno não encontrado")
    }

})

router.get('/all',(req,res)=>{
    res.json(JSON.stringify(alunos))
})


router.get('/:id',(req,res)=>{
    console.log(req.params)
    let aluno = alunos[req.params.id]
    res.send(aluno)
})

module.exports = router