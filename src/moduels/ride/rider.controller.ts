import { Request, Response } from 'express';
import { RiderService } from './rider.service';


  const requestRide = async (req: Request, res: Response) => {
    const riderId = (req as any).user._id;
    const { pickup, destination } = req.body;
    const ride = await RiderService.requestRide(riderId, pickup, destination);
    res.status(201).json({ success: true, data: ride });
  }

  const cancelRide =  async (req: Request, res: Response) => {
    const riderId = (req as any).user._id;
    const { rideId } = req.params;
    const ride = await RiderService.cancelRide(riderId, rideId);
    res.status(200).json({ success: true, message: 'Ride cancelled', data: ride });
  }

  const  getRideHistory = async (req: Request, res: Response) => {
    const riderId = (req as any).user._id;
    const history = await RiderService.getRideHistory(riderId);
    res.status(200).json({ success: true, data: history });
  }


export const RiderController = {
    requestRide,
    cancelRide,
    getRideHistory
  }