"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.riderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const rider_controller_1 = require("./rider.controller");
const authGuard_1 = require("../../middlewares/authGuard");
const router = express_1.default.Router();
router.post('/request', (0, authGuard_1.authGuard)(['rider']), rider_controller_1.RiderController.requestRide);
router.patch('/cancel/:rideId', (0, authGuard_1.authGuard)(['rider']), rider_controller_1.RiderController.cancelRide);
router.get('/history', (0, authGuard_1.authGuard)(['rider']), rider_controller_1.RiderController.getRideHistory);
exports.riderRoutes = router;
