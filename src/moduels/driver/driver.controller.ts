import { Request, Response } from 'express';
import { DriverServices } from './driver.service';



const updateAvailability = async (req: Request, res: Response) => {
    const user = (req as any).user;
    const result = await DriverServices.updateAvailability(user._id, req.body.status);
    res.status(200).json({ success: true, data: result });
}

const getMyRides = async (req: Request, res: Response) => {
    const user = (req as any).user;
    const result = await DriverServices.getMyRides(user._id);
    res.status(200).json({ success: true, data: result });
}

const getEarnings = async (req: Request, res: Response) => {
    const user = (req as any).user;
    const result = await DriverServices.getEarnings(user._id);
    res.status(200).json({ success: true, data: result });
}

const updateRideStatus = async (req: Request, res: Response) => {
    const driverId = (req as any).user._id;
    const { rideId } = req.params;
    const { status } = req.body;
    const result = await DriverServices.updateRideStatus(driverId, rideId, status);
    res.status(200).json({ success: true, data: result });
}

const acceptRide = async (req: Request, res: Response) => {
    const driverId = (req as any).user._id;
    const result = await DriverServices.acceptRide(driverId, req.params.rideId);
    res.status(200).json({ success: true, data: result });
}

const rejectRide = async (req: Request, res: Response) => {
    const driverId = (req as any).user._id;
    const result = await DriverServices.rejectRide(driverId, req.params.rideId);
    res.status(200).json({ success: true, data: result });
}

export const DriverController = {
    updateAvailability,
    getMyRides,
    getEarnings,
    updateRideStatus,
    acceptRide,
    rejectRide,
}