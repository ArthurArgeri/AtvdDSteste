const express = require("express")//Para usar o express
const server = express()//Para criar um servidor
const usuario = require("./src/usuarios.json")
const livro = require("./src/livros.json")

/**TESTES:
const pessoas = require("./src/teste.json")
server.get("/", (req, res)=>{
    return res.json({mensagem:"Hello NODE"})
})

server.get("/abacate", (req, res)=>{
    return res.json({mensagem:"ABACATEEE"})
})

server.get("/pessoas", (req, res)=>{
    return res.json({
        pessoas
    })
})
**/

//API's emprestimo de livros:
server.listen(3300, ()=>{
    console.log('server ON')
})

server.get("/usuario", (req,res)=>{
    return res.json({usuario})
})

server.get("/livro", (req,res)=>{
    return res.json({livro})
})

