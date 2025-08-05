"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverController = void 0;
const driver_service_1 = require("./driver.service");
const updateAvailability = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield driver_service_1.DriverServices.updateAvailability(user._id, req.body.status);
    res.status(200).json({ success: true, data: result });
});
const getMyRides = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield driver_service_1.DriverServices.getMyRides(user._id);
    res.status(200).json({ success: true, data: result });
});
const getEarnings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const result = yield driver_service_1.DriverServices.getEarnings(user._id);
    res.status(200).json({ success: true, data: result });
});
const updateRideStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const driverId = req.user._id;
    const { rideId } = req.params;
    const { status } = req.body;
    const result = yield driver_service_1.DriverServices.updateRideStatus(driverId, rideId, status);
    res.status(200).json({ success: true, data: result });
});
const acceptRide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const driverId = req.user._id;
    const result = yield driver_service_1.DriverServices.acceptRide(driverId, req.params.rideId);
    res.status(200).json({ success: true, data: result });
});
const rejectRide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const driverId = req.user._id;
    const result = yield driver_service_1.DriverServices.rejectRide(driverId, req.params.rideId);
    res.status(200).json({ success: true, data: result });
});
exports.DriverController = {
    updateAvailability,
    getMyRides,
    getEarnings,
    updateRideStatus,
    acceptRide,
    rejectRide,
};
