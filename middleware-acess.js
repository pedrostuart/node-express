import express from "express"
const app = express()
import chalk from "chalk"

app.use(express.json()) // nos permite leer json e tratar como string

function verificarAcesso(req, res, next){
    const autorizado = true //simulaçãode acesso
    //true pega o acesso
    //false nega o acesso

    if(autorizado){
        next()// next esta levando e permitindo pro get começar
    }else{
        res.status(403).json({
            mensagem: "Acesso negado"
        })
    }
}

//Incluindo middlware na rota

app.get("/admin", verificarAcesso, (req, res) =>{
    res.json({
        mensagem: "Área administrativa acessada"
    })
})

app.listen(3000, ()=>{
    console.log(chalk.green("http://localhost:3000"))
})