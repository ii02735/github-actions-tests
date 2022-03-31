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

const fs = require('fs')

test("Adding table into test db", async () => {
    const sql = fs.readFileSync('./resources/test.sql').toString()
    await knex.raw(sql);
})