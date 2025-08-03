import { StatusCodes } from "http-status-codes"
import AppError from "../../handleEoor/AppError"
import { User } from "./user.model"

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
}


export const UserServices = {
    getAllUser
}