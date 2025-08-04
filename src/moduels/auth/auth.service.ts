import { User } from "../user/user.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const registerUser =  async(data: any)=>{
    const {name, email, password, role} = data;
    const exitUser = await User.findOne({email});
    if(exitUser){
        throw new Error("User already exist with this email")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        passsword: hashedPassword,
        role,
        isApproved: role === "driver" ? false : true,
    });

    const token = jwt.sign(
        {_id: user._id, role: user.role},
        process.env.JWT_SECRET!,
        {expiresIn: "3d"}
    )

    return {token, user}

}

const loginUser =  async (data: any)=>{
    const {email, password} = data;
    const user = await User.findOne({email})
    if(!user){
        throw new Error ("user not fund");
    }
    if(user.isBlocked){
        throw new Error("User is blocked")
    }
    const isPasswordMatched = await bcrypt.compare(password, user.passsword);
    if(!isPasswordMatched){
        throw new Error("invalid Password")
    }

    const token  = jwt.sign(
        {_id: user._id, role: user.role},
        process.env.JWT_SECRET!,
        {expiresIn: '3d'}
    )
    return {token, user}
}


export const AuthService = {
    registerUser,
    loginUser
}
