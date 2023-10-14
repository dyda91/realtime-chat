import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import ChatRoute from './Routes/ChatRoute.js'
import conn from './Database/conn.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(bodyParser.json({limit: '30mb',  extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb',  extended: true}))


//DB connection


conn();



app.use("/chat", ChatRoute)



app.listen(process.env.PORT, function(){
    console.log("servidor Online na porta: ",process.env.port);
});
