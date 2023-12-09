const {Client} = require('pg')
 
const client = new Client({
    host: "ecuquestcs.c8ixdx9wngdk.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "Leposa13",
    database: "ecuquestcs"
})  

module.exports = client ;