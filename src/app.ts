import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { userRoutes } from "./moduels/user/user.route";
import { authRoutes } from "./moduels/auth/auth.route";
import { riderRoutes } from "./moduels/ride/rider.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())

// routes 

app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/users", userRoutes);
app.use('/api/v1/rider', riderRoutes);


app.get('/',(req, res)=>{
    res.send("Ride Booking API is Running")
})

export default app;



