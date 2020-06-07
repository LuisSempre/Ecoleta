const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))

//utlizando template engine
 const nunjucks = require("nunjucks")
 nunjucks.configure("src/views", {
     express: server,
     noCache: true
 })

//configurar caminhos da apliacação
//pagina inicial
//req: Requição
//res: Resposta
server.get("/", (req, res) =>{
    res.render("index.html", 
    { title: "Seu marketplace de coleta de residuos"})
})

server.get("/create-point", (req, res) =>{
    res.render("create-point.html")
})

server.get("/search", (req, res) =>{
    res.render("search-results.html")
})

//ligar servidor
server.listen(5000)