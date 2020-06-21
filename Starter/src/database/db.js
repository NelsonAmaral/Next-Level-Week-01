//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")


//utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    //criar uma tabela com commandos:

     //1 Criar uma tabelas
     db.run(`
         CREATE TABLE IF NOT EXISTS places (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             image TEXT,
             name TEXT,
             address TEXT,
             address2 TEXT,
             state TEXT,
             city TEXT,
             items TEXT
         );
     `)
     //Inserir dados na tabela
     const query = `
     INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items
     ) VALUES (?,?,?,?,?,?,?);`
     const values = [
         "https://images.unsplash.com/photo-1513015141805-e941bbf2be32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80",
         "Colectoria",
         "Mercado 01, Jd NBl",
         "N°1023",
         "São Paulo",
         "Suzano",
         "Residuos"
     ]

     function afterInsertData(err){
         if(err) {
             return console.log(err)
         }

         console.log("Cadastrado com sucesso")
         console.log(this)
     }

    //db.run(query, values, afterInsertData)


    //consultar os dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows){
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros")
    //     console.log(rows)
    //})
    //Deletar um dado da tabela
    //db.run(`DELETE FROM places WHERE id = ?`, [2], function(err){
    //    if(err) {
    //        return console.log(err)
    //    }
    //    console.log("Registro deletado com sucesso")
    //})
})

module.exports = db