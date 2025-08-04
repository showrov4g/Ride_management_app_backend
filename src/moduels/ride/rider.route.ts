import express from 'express';
import { RiderController } from './rider.controller';
import { authGuard } from '../../middlewares/authGuard';

const router = express.Router();

router.post('/request', authGuard(['rider']), RiderController.requestRide);
router.patch('/cancel/:rideId', authGuard(['rider']), RiderController.cancelRide);
router.get('/history', authGuard(['rider']), RiderController.getRideHistory);

export const riderRoutes = router;
