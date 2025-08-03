import { StatusCodes } from "http-status-codes"
import AppError from "../../handleEoor/AppError"
import { User } from "./user.model"
import { IUser } from "./user.interface"

// get all user data 
const getAllUser = async ()=>{
    await User.find()
}
// get user data by id 


const getUserById = async(id:string)=>{
    const user = await User.findById(id)
    if(!user){
        throw new AppError(StatusCodes.UNAUTHORIZED,"User not found")
    }
    return user;
}

// check block user 

// const block user check  

const blockUser = async(id: string) =>{
    const result = await User.findByIdAndUpdate(id,{isBlocked:true},{new: true})
    return result
}

const unBlockUser = async (id: string)=>{
    const result = await User.findByIdAndUpdate(id,{isBlocked:false},{new:true})
    return result
}

// approve driver 
const approveDriver = async (id: string)=>{
    const result = await User.findByIdAndUpdate(id,{isApproved:true}, {new: true})
    return result
}

// suspend driver 
const suspendDriver = async (id:string)=>{
    const result = await User.findByIdAndUpdate(id,{isApproved:false},{new:true})
    return  result
}

// user profile update 

const updateProfile = async(id:string, payload: Partial<IUser>)=>{
    const result = await  User.findByIdAndUpdate(id, payload, {new:true})
}

export const UserServices = {
    getAllUser,
    getUserById,
    blockUser,
    unBlockUser,
    approveDriver,
    suspendDriver,
    updateProfile
}