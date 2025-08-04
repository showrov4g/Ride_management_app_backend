import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { userRoutes } from "./moduels/user/user.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())

// routes 

// app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/users", userRoutes);



app.get('/',(req, res)=>{
    res.send("Ride Booking API is Running")
})

export default app;



