import { IUser } from "./auth.interface";
import bcrypt from "bcrypt"
import { User } from "./user.model";
import AppError from "../../handleEoor/AppError";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { email } from "zod";

const registerUser = async(payload:IUser)=>{
    const hashPassword= await bcrypt.hash(payload.password, 10);
    const user = await User.create({...payload, password: hashPassword})
    return{
        id: user._id,
        email: user.email,
        role: user.role
    }
}

const loginUser = async (payload:{email: string; password:string})=>{
    const user = await User.findOne({email: payload.email});
    if(!user){
        throw new AppError(StatusCodes.UNAUTHORIZED, "User not found")
    }
    const isPasswordValid = await bcrypt.compare(payload.password, user.password);
    if(!isPasswordValid){
        throw new AppError(StatusCodes.UNAUTHORIZED,"Password is incorrect");
    }
    const token = jwt.sign(
        {id:user._id, role: user.role},
        process.env.JWT_SECRET as string,
        {expiresIn: "1d"}
    )
    return{
        accessToken: token,
        user:{
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    }
}

export const AuthServices={
    registerUser,
    loginUser
}