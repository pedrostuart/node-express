import express from "express"
const app = express()
import chalk from "chalk"
app.use(express.json())

//Utilizando midlleware
app.get("/produtos", (req, res)=>{
    res.json({
        mensagem: "Middleware utilizado"
    })
})

//utilizando middleware
function logger(req, res, next){
    console.log(req.method, req.url)//
    next()
}
app.use(logger)

app.listen(3000, ()=>{
    console.log(`Servidor: ${chalk.green.bold("http://localhost:3000")}`)
})