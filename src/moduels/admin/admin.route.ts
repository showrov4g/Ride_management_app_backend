import express from 'express';
import { AdminController } from './admin.controller';
import { authGuard } from '../../middlewares/authGuard';

const router = express.Router();

router.get('/users', authGuard(['admin']), AdminController.getAllUsers);
router.get('/drivers', authGuard(['admin']), AdminController.getAllDrivers);
router.get('/rides', authGuard(['admin']), AdminController.getAllRides);
router.patch('/driver/approve/:id', authGuard(['admin']), AdminController.approveDriver);
router.patch('/driver/suspend/:id', authGuard(['admin']), AdminController.suspendDriver);
router.patch('/user/block/:id', authGuard(['admin']), AdminController.blockUser);
router.patch('/user/unblock/:id', authGuard(['admin']), AdminController.unblockUser);

export const adminRoutes = router;
