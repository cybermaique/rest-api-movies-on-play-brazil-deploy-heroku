const express = require("express")
const app = express()
const port = process.env.PORT || 3000 //como a porta do heroku é aleatória, definimos dessa forma. Dessa forma, ele vai pegar a porta no Heroku e usar aqui. Se não achar, vamos usar a 3000.

const movies = require("./src/cidades/porto alegre/movies.json")

//rota
app.get("/portoalegre", (req, res) => {
    return res.json(movies)
})

//servidor precisa escutar em alguma porta (porta específica do heroku)
app.listen(port, () => {
    console.log("Servidor está rodando...")
})

