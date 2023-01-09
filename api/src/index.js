const express = require('express') ;
const {Server} = require("socket.io") ;
const app = express() ;
const authRouter = require('./routers/authRouter')
const session = require('express-session') ;
const dotenv = require('dotenv').config()
const cors = require('cors') ;
const server = require("http").createServer(app) ;
const helmet = require('helmet') ;

const io = new Server(server, {
    cors: {
        origin: "http//localhost:4000",
        credentials: true,
    },
}) ;

app.use(helmet()) ;

app.use(
    cors({
    origin: "http://localhost:4000",
    credentials: true,
    })
);

app.use(express.json()) ;


app.use(session({
    secret: 'awdjkawndkjawndawndjn',
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.ENVIRONMENT === "production",
        httpOnly: true,
        expires: 1000 * 60 * 60 * 24 * 7,
        sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
    }
}))

app.use("/auth", authRouter) ; 

io.on("connect", (socket) => {}) ;

// Confirms connection to dev
app.listen(4000, ()=>{
    console.log("Server is now listening at port 4000");
}) ;
