const {Client} = require('pg')
 
const client = new Client({
    host: "Localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "ECUQuestCS"
})

module.exports = client ;