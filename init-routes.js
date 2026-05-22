//rotas no express
import express from "express"
const app = express()
import chalk from "chalk"
app.use(express.json())

//Metodos GET
app.get("/produtos", (req, res)=>{
    res.json([
        {id:1, nome: "Notebook", preco:5000},
        {id:2, nome: "Mouse", preco:200}
    ])
})
app.get("/usuarios", (req, res)=>{
    res.json([
        {id:1, nome: "Fernanda"},
        {id:2, nome: "Luana"}
    ])
})

//metodo post com rota de produtos
app.post("/produtos", (req, res)=>{
    const novoProduto = req.body // O app.use(express.json()) faz com que ele ja armeza tudo junto e como string

    res.json({
        mensagem: "Produto cadastrado com sucesso",
        produto: novoProduto
    })
})


//metodo PUT
app.put("/produtos/:id", (req, res)=>{
    const id = req.params.id //esse id ta peagando o valor que vai ser digitado na url, no caso o id
    const dadosAtualizado = req.body
    res.json({
        mensagem: 'Atualizado com sucesso',
        id:id,
        dados: dadosAtualizado
    })
})


//metodo DELETE
app.delete("/produtos/:id", (req, res)=>{
    const id = req.params.id
    res.json({
        mensagem:"Produto removido com sucesso",
        id:id
    })
})
app.listen(3000, ()=>{
    console.log(`Servidor: ${chalk.green.bold("http://localhost:3000")}`)
})