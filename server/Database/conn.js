import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

async function conn() {

    try {

        await mongoose.connect(process.env.MONGO_DB)

        console.log("Conectado ao banco")

    } catch (error){
        console.log(`Error: ${error}`)
    }
}

export default conn