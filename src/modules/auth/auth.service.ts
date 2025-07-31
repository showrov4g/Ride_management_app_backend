import { IUser } from "./auth.interface";
import bcrypt from "bcrypt"

const registerUser = async(payload:IUser)=>{
    const hashPassword= await bcrypt.hash(payload.password, 10);
    const user = await 
}