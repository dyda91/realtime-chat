import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

async function conn() {

    try {

        await mongoose.connect("mongodb+srv://dyda91:dida1991@cluster0.hov2861.mongodb.net/")

        console.log("Conectado ao banco")

    } catch (error){
        console.log(`Error: ${error}`)
    }
}

export default conn