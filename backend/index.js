const express = require('express') ;
const {Server} = require("socket.io") ;
const app = express() ;
const authRouter = require('./routers/authRouter')
const session = require('express-session') ;
const cors = require('cors') ;
const helmet = require('helmet') ;

app.use(helmet()) ;

app.use(
    cors({
    origin: "http://localhost:3000",
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

// Confirms connection to dev
app.listen(4000, ()=>{
    console.log("Server is now listening at port 4000");
}) ;
