import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import ChatRoute from './Routes/ChatRoute.js'
import AuthRoute from "./Routes/AuthRoute.js"
import MessageRoute from "./Routes/MessageRoute.js"
import conn from './Database/conn.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

//Middlewere
app.use(bodyParser.json({limit: '30mb',  extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb',  extended: true}))
app.use(cors())

//DB connection
conn();



//Routes
app.use("/auth", AuthRoute)
app.use("/chat", ChatRoute)
app.use("/message", MessageRoute)




app.listen(process.env.PORT, function(){
    console.log("servidor Online na porta: ",process.env.port);
});
