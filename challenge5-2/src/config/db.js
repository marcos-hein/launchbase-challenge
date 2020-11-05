const { Pool } = require("pg")

module.exports = new Pool({
    user: "vinicius",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "my_teacher"
})