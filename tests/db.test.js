const knex = require("knex")({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: "utf8mb4",
    },
    log: {
      warn() {
        // do nothing...it will hide warning messages
      },
    },
});

const path = require('path')

const fs = require('fs');

test("Adding table into test db", async () => {
    
    const sql = fs.readFileSync(path.join(__dirname,'resources','table.sql')).toString()
    try{
        await knex.raw(sql);
    }catch(e){
        throw new Error(e)
    }finally{
        await knex.destroy()
    }
})