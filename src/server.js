const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//configurar pasta publica
server.use(express.static("public"))

//habilitar req.body

server.use(express.urlencoded({ extended: true}))

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
server.get("/", (req, res) => {
    return res.render("index.html",
        { title: "Seu marketplace de coleta de residuos" })
})

server.get("/create-point", (req, res) => {

    // console.log(req.query)

    return res.render("create-point.html", { saved: true})
})

server.post("/savepoint", (req, res)=>{

    //re.body: corpo do formulario
    // console.log(req.body)

    //inserir dados no banco
    const query = `
        INSERT INTO places (
            image,
            name,
            adress,
            adress2,
            state,
            city,
            items
        )VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.adress,
        req.body.adress2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.send("create-point.html", { saved: true})
    }

        db.run(query, values, afterInsertData)
    
})


server.get("/search", (req, res) => {

    //pegar o banco de dados
    db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)

        }

        const total = rows.length
        // console.log("Aqui estão seus registros: ")
        // console.log(rows)
        // mostrar a pagina html com dados do banco de dados
        res.render("search-results.html", { places: rows, total })
    })

})

//ligar servidor
server.listen(5000)