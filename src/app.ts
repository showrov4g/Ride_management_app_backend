import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { authRoutes } from "./moduels/auth/auth.route";
import { userRoutes } from "./moduels/user/user.route";
import { riderRoutes } from "./moduels/ride/rider.route";
import { driverRoutes } from "./moduels/driver/driver.route";
import { adminRoutes } from "./moduels/admin/admin.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())

// routes 

app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/users", userRoutes);
app.use('/api/v1/rides', riderRoutes);
app.use('/api/v1/driver', driverRoutes);
app.use('/api/v1/admin', adminRoutes);


app.get('/',(req, res)=>{
    res.send("Ride Booking API is Running")
})

export default app;



