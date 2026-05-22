// para instalar express

//abrir o terminal, npm init -y depois npm install express

import express from "express"
import chalk from 'chalk';
const app = express()


//middleware nativo do express que permite a nossa aplicação interpretar dados enviados em json, transforma dados em objetos(string) automaticamente
app.use(express.json())


app.get("/", (req, res) =>{
    res.send("Servidor funcionando")
})

app.listen(3000, ()=>{
    console.log(`Servidor: ${chalk.green.bold("http://localhost:3000")}`)
})