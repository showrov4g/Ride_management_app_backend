import { Request, Response } from "express";
import { userService } from "./user.services";
import { success } from "zod";

const getAllUser = async (req: Request, res: Response) => {
    const users = await userService.getAllUser();
    res.status(200).json({ success: true, data: users })
}

const blockUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const result = await userService.updateBLockStatus(userId, true);
    res.status(200).json({ success: true, message: " User block successfully" })
}

const unblockUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const result = await userService.updateBLockStatus(userId, false);
    res.status(200).json({ success: true, message: "User unblock successfully" })
}

export const UserController = {
    getAllUser,
    blockUser,
    unblockUser
}