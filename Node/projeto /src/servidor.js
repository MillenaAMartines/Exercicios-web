const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const bancoDeDados = require ('./bancoDedados')


app.use(bodyParser.urlencoded({extended: true}))


app.get('/produtos',(req,res,next) => { 
    // res.send({nome:'notebook', preco:1020}) //convertei para json
    res.send(bancoDeDados.getProdutos())

})

app.get('/produtos/:id', (req,res,next) => { 
    res.send(bancoDeDados.getProduto(req.params.id))

})

app.post('/produtos', (req,res,next) => { 
    const produto = bancoDeDados.salvarProduto ({
        nome: req.body.nome, 
        preco: req.body.preco,
    })
    res.send(produto) // gera um Json 

})

app.delete('/produtos', (req,res,next) => { 
    const produto = bancoDeDados.excluirProduto (req.params.excluirProduto)
    res.send(produto) 
})


app.listen(porta,() => {
    console.log(`servidor excutadondo na porta ${porta}.`)
})