
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

export const connectDB = async ()=>{
    try {
        await  mongoose.connect(process.env.DB_URL as string)
        console.log(' Database connected')
    } catch (error) {
        console.log(`MongoDB connection error ${error}`)
        process.exit(1)
    }
}