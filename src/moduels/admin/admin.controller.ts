import { Request, Response } from 'express';
import { AdminService } from './admin.service';


  const getAllUsers = async (_req: Request, res: Response) => {
    const users = await AdminService.getAllUsers();
    res.status(200).json({ success: true, data: users });
  }

  const getAllDrivers= async (_req: Request, res: Response) => {
    const drivers = await AdminService.getAllDrivers();
    res.status(200).json({ success: true, data: drivers });
  }

  const getAllRides = async (_req: Request, res: Response) => {
    const rides = await AdminService.getAllRides();
    res.status(200).json({ success: true, data: rides });
  }

  const approveDriver = async (req: Request, res: Response) => {
    const driverId = req.params.id;
    const updated = await AdminService.updateDriverApproval(driverId, true);
    res.status(200).json({ success: true, message: 'Driver approved', data: updated });
  }

  const suspendDriver = async (req: Request, res: Response) => {
    const driverId = req.params.id;
    const updated = await AdminService.updateDriverApproval(driverId, false);
    res.status(200).json({ success: true, message: 'Driver suspended', data: updated });
  }

  const blockUser= async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updated = await AdminService.updateUserBlock(userId, true);
    res.status(200).json({ success: true, message: 'User blocked', data: updated });
  }

  const unblockUser = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const updated = await AdminService.updateUserBlock(userId, false);
    res.status(200).json({ success: true, message: 'User unblocked', data: updated });
  }

export const AdminController = {
    getAllUsers,
    getAllDrivers,
    getAllRides,
    approveDriver,
    suspendDriver,
    blockUser,
    unblockUser
};
