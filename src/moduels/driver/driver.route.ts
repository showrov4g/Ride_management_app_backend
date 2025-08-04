import express from 'express';
import { DriverController } from './driver.controller';
import { authGuard } from '../../middlewares/authGuard';

const router = express.Router();

router.patch('/availability', authGuard(['driver']), DriverController.updateAvailability);
router.get('/rides', authGuard(['driver']), DriverController.getMyRides);
router.get('/earnings', authGuard(['driver']), DriverController.getEarnings);
router.patch('/ride/:rideId/status', authGuard(['driver']), DriverController.updateRideStatus);
router.post('/ride/:rideId/accept', authGuard(['driver']), DriverController.acceptRide);
router.post('/ride/:rideId/reject', authGuard(['driver']), DriverController.rejectRide);

export const driverRoutes = router;
