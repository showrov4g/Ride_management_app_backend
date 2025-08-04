import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())

// routes 

app.get('/',(req, res)=>{
    res.send("Ride Booking API is Running")
})

export default app;



