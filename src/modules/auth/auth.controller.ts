import { Request, Response } from "express";
import { AuthServices } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";


const registerUser = async (req:Request, res: Response)=>{
    const result = await AuthServices.registerUser(req.body);
    sendResponse(res,{
        success: true,
        statusCode: StatusCodes.CREATED,
        message: "user carate successfully",
        data: result
    })
}


  const loginUser = async(req: Request, res: Response)=> {
    const result = await AuthServices.loginUser(req.body)
    sendResponse(res, {
        success: true,
      statusCode: 200,
      message: 'Login successful',
      data: result,
    })
  }




export const AuthController ={
    registerUser,
    loginUser
}