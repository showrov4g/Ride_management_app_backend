import { User } from "./user.model"

const getAllUser = async () => {
    const result = await User.find();
    return result;
}

const updateBLockStatus = async (userId: string, status: boolean) => {
    const result = await User.findByIdAndUpdate(userId, { isBlocked: status }, { new: true })
    return result;
}



export const userService = {
    getAllUser,
    updateBLockStatus
}