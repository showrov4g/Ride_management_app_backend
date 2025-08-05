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
exports.RiderController = void 0;
const rider_service_1 = require("./rider.service");
const requestRide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const riderId = req.user._id;
    const { pickup, destination } = req.body;
    const ride = yield rider_service_1.RiderService.requestRide(riderId, pickup, destination);
    res.status(201).json({ success: true, data: ride });
});
const cancelRide = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const riderId = req.user._id;
    const { rideId } = req.params;
    const ride = yield rider_service_1.RiderService.cancelRide(riderId, rideId);
    res.status(200).json({ success: true, message: 'Ride cancelled', data: ride });
});
const getRideHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const riderId = req.user._id;
    const history = yield rider_service_1.RiderService.getRideHistory(riderId);
    res.status(200).json({ success: true, data: history });
});
exports.RiderController = {
    requestRide,
    cancelRide,
    getRideHistory
};
