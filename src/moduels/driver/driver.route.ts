import express from 'express';
import { DriverController } from './driver.controller';
import { authGuard } from '../../middlewares/authGuard';

const router = express.Router();

router.patch('/availability', authGuard(['driver']), DriverController.updateAvailability);
router.get('/rides', authGuard(['driver']), DriverController.getMyRides);
router.get('/earnings', authGuard(['driver']), DriverController.getEarnings);
router.patch('/status/:rideId', authGuard(['driver']), DriverController.updateRideStatus);
router.patch('/accept/:rideId', authGuard(['driver']), DriverController.acceptRide);
router.patch('/reject/:rideId', authGuard(['driver']), DriverController.rejectRide);

export const driverRoutes = router;
