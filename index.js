const express = require("express")
const app = express()

const movies = require("./src/cidades/porto alegre/movies.json")

//rota
app.get("/portoalegre"), (req, res) => {
    return res.json(movies)
}