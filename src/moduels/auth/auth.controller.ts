import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const register = async (req: Request, res: Response) => {
    const result = await AuthService.registerUser(req.body);
    res.status(201).json({ success: true, message: "User register", data: result })
}
const login = async(req:Request, res:Response)=>{
    const result =  await AuthService.loginUser(req.body);
    res.status(200).json({success: true, message: "login successfully", data: result })
}

export const AuthController = {
    register,
    login
}