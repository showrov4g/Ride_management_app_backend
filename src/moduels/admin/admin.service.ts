import { User } from '../user/user.model';
import { Ride } from '../ride/ride.model';


const getAllUsers = async () => {
    return await User.find();
}

const getAllDrivers = async () => {
    return await User.find({ role: 'driver' });
}

const getAllRides = async () => {
    return await Ride.find().populate('rider').populate('driver');
}

const updateDriverApproval = async (driverId: string, isApproved: boolean) => {
    return await User.findOneAndUpdate(
        { _id: driverId, role: 'driver' },
        { isApproved },
        { new: true }
    );
}

const updateUserBlock = async (userId: string, isBlocked: boolean) => {
    return await User.findByIdAndUpdate(userId, { isBlocked }, { new: true });
}


export const AdminService = {
    getAllUsers,
    getAllDrivers ,
    getAllRides,
    updateDriverApproval,
    updateUserBlock 
};
