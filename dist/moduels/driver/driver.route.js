"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRoutes = void 0;
const express_1 = __importDefault(require("express"));
const driver_controller_1 = require("./driver.controller");
const authGuard_1 = require("../../middlewares/authGuard");
const router = express_1.default.Router();
router.patch('/availability', (0, authGuard_1.authGuard)(['driver']), driver_controller_1.DriverController.updateAvailability);
router.get('/rides', (0, authGuard_1.authGuard)(['driver']), driver_controller_1.DriverController.getMyRides);
router.get('/earnings', (0, authGuard_1.authGuard)(['driver']), driver_controller_1.DriverController.getEarnings);
router.patch('/status/:rideId', (0, authGuard_1.authGuard)(['driver']), driver_controller_1.DriverController.updateRideStatus);
router.patch('/accept/:rideId', (0, authGuard_1.authGuard)(['driver']), driver_controller_1.DriverController.acceptRide);
router.patch('/reject/:rideId', (0, authGuard_1.authGuard)(['driver']), driver_controller_1.DriverController.rejectRide);
exports.driverRoutes = router;
