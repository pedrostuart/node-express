import express from "express"
import chalk from "chalk"
const app = express()
app.use(express.json())

function logger(req, res, next){
    console.log(req.url, req.method)//vai axibir a url e o method
    next()
}
app.use(logger)//aqui eu to aplicando o middleware(logger) em todas as rotas
function verificarAcesso(req, res, next){
    const senha = req.query.senha // pegando o query da url, query da url e a chave que recebe o valor
    if(senha === "1234"){
        next()// bora pro proximo
    }else{
        res.status(403).json({
        mensagem: `Acesso negado, senha: ${senha} incorreta!`
    })
    }
}
let produtos = [
    {id:1, nome:"Notebook", preco: 5000},
    {id:2, nome:"Mouse", preco: 120},
    {id:3, nome:"Teclado", preco: 250},
    {id:4, nome:"Monitor", preco: 900},
    {id:5, nome:"Headset", preco: 300}
]
app.get("/produtos", (req, res)=>{
    res.json({produtos})
})
app.get("/produtos/:id", (req, res)=>{
    const id = req.params.id
    res.json({
        mensagem: "Produto encontrado",
        produtos: produtos[id-1]
    })
})
app.post("/produtos", (req, res)=>{
    const novoProduto = req.body
    produtos.push(novoProduto)

    res.json({
        mensagem: 'Produto cadastrado com sucesso',
        produtos: novoProduto
    })
})

app.put("/produtos/:id", (req, res)=>{
    const id = Number(req.params.id)
    const produtoAtualizado = req.body

    let produto = produtos.findIndex(pedido => pedido.id === id)

    if(produto > -1){
        produtos[produto] = {...produtoAtualizado, id:id}
        res.json(produtoAtualizado)
        return
    }
    
})

app.delete("/produtos", (req, res)=>{
    const deletarProduto = req.body
    const produto = produtos.findIndex(produto => produto.id === deletarProduto.id)
    if(produto > -1){
        produtos.splice(produto, 1)
        res.json({
            deletar: deletarProduto
        })
    }
})
//Rota protegida

app.get("/admin", verificarAcesso, (req, res)=>{
    res.json({mensagem: "Área administrativa acessada"})
})
app.listen(3000, ()=>{
    console.log(chalk.green.bold("http://localhost:3000/produtos"))
})
