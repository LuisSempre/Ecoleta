//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados
db.serialize(() => {
//     //comandos SQL:

//     //1-Criar tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //2-inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             adress,
//             adress2,
//             state,
//             city,
//             items
//         )VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//         "Papersider",
//         "Guilherme Gembala, Jardim America",
//         "Numero 260", "Santa Catarina",
//         "Rio do Sul",
//         "Residuos Eletronicos, Lampadas"]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     //3-consultar os dados da tabela
//     // db.all(`SELECT * FROM places`, function (err, rows) {
//     //     if (err) {
//     //         return console.log(err)

//     //     }
//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // })

//     //4-deletar dados na tabela
    // db.run(` DELETE FROM places WHERE id= ?`, [3], function (err) {
    //     if (err) {
    //         return console(err)
    //     }
    //     console.log("Registro deletado com sucesso!")
    // })

})