import { Request, Response } from "express";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import AppError from "../../handleEoor/AppError";
import { StatusCodes } from "http-status-codes";

const getAllUser = async (req: Request, res: Response) => {
    const users = await UserServices.getAllUser();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'User data found',
        data: users
    })
}

// get single profile 

const getProfile = async (req: Request, res: Response) => {
    const id = req.user?.id
    if (!id) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Id not found")
    }
    const user = await UserServices.getUserById(id)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Profile updated',
        data: user
    })
}

// update user profile 

const updateProfile = async (req: Request, res: Response) => {
    const id = req.user?.id
    if (!id) {
        throw new AppError(StatusCodes.UNAUTHORIZED, "Id not found")
    }
    const user = await UserServices.updateProfile(id, req.body)
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: 'Profile updated',
        data: user
    })
}

// const block user 

const blockUser = async (req: Request, res:Response) =>{
    const result = await UserServices.blockUser(req.params.id)
    sendResponse(res,{
        success: true,
        statusCode: 200,
        message: "User Block",
        data: result
    })
}
const unBlockUser = async (req: Request, res: Response)=>{
    const result = await UserServices.unBlockUser(req.params.id);
    sendResponse(res,{
        success: true,
        statusCode: 200,
        message: "User unblock",
        data: result
    })
}





export const UserController = {
    getAllUser,
    getProfile,
    updateProfile,
    blockUser,
    unBlockUser
}