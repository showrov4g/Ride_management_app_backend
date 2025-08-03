import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { authRoutes } from "./modules/auth/auth.route";

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json())
app.use(cookieParser())


// routes 
app.use('/api/auth', authRoutes)
// app.use('/api/rides', rideRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/drivers', driverRoutes)



app.use("/", (req: Request, res : Response) =>{
    res.send("Ride Booking app is running")
})

export default app;