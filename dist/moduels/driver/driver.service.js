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
exports.DriverServices = void 0;
const mongoose_1 = require("mongoose");
const user_model_1 = require("../user/user.model");
const ride_model_1 = require("../ride/ride.model");
const updateAvailability = (driverId, status) => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.User.findByIdAndUpdate(driverId, { isOnline: status }, { new: true });
});
const getMyRides = (driverId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ride_model_1.Ride.find({ driver: driverId });
});
const getEarnings = (driverId) => __awaiter(void 0, void 0, void 0, function* () {
    const rides = yield ride_model_1.Ride.find({ driver: driverId, status: 'completed' });
    const total = rides.reduce((sum, ride) => sum + (ride.fare || 0), 0);
    return { total, count: rides.length };
});
const updateRideStatus = (driverId, rideId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const allowed = ['picked_up', 'in_transit', 'completed'];
    if (!allowed.includes(status))
        throw new Error('Invalid status');
    if (!mongoose_1.Types.ObjectId.isValid(rideId))
        throw new Error('Invalid ride ID');
    const ride = yield ride_model_1.Ride.findOne({ _id: rideId, driver: driverId });
    if (!ride)
        throw new Error('Ride not found');
    ride.status = status;
    if (!ride.statusHistory)
        ride.statusHistory = [];
    ride.statusHistory.push({ status, timeStamp: new Date() });
    yield ride.save();
    return ride;
});
const acceptRide = (driverId, rideId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(rideId))
        throw new Error('Invalid ride ID');
    const ride = yield ride_model_1.Ride.findById(rideId);
    if (!ride)
        throw new Error('Ride not found');
    if (ride.status !== 'requested')
        throw new Error('Ride already accepted or canceled');
    ride.driver = new mongoose_1.Types.ObjectId(driverId);
    ride.status = 'accepted';
    ride.statusHistory.push({ status: 'accepted', timeStamp: new Date() });
    yield ride.save();
    return ride;
});
const rejectRide = (driverId, rideId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!mongoose_1.Types.ObjectId.isValid(rideId))
        throw new Error('Invalid ride ID');
    const ride = yield ride_model_1.Ride.findOne({ _id: rideId, status: 'requested' });
    if (!ride)
        throw new Error('Ride not available to reject');
    return { message: 'Ride rejected (no change to db)' };
});
exports.DriverServices = {
    updateAvailability,
    getMyRides,
    getEarnings,
    updateRideStatus,
    acceptRide,
    rejectRide,
};
