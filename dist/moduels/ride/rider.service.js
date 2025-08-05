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
exports.RiderService = void 0;
const ride_model_1 = require("../ride/ride.model");
const requestRide = (riderId, pickup, destination) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield ride_model_1.Ride.findOne({
        rider: riderId,
        status: { $in: ['requested', 'accepted', 'picked_up', 'in_transit'] },
    });
    if (existing) {
        throw new Error('You already have an active ride');
    }
    const ride = yield ride_model_1.Ride.create({
        rider: riderId,
        pickup,
        destination,
        status: 'requested',
        statusHistory: [{ status: 'requested', timeStamp: new Date() }],
    });
    return ride;
});
const cancelRide = (riderId, rideId) => __awaiter(void 0, void 0, void 0, function* () {
    const ride = yield ride_model_1.Ride.findOne({ _id: rideId, rider: riderId });
    if (!ride)
        throw new Error('Ride not found');
    if (ride.status !== 'requested') {
        throw new Error('Cannot cancel ride after it is accepted');
    }
    ride.status = 'canceled';
    ride.statusHistory.push({ status: 'canceled', timeStamp: new Date() });
    yield ride.save();
    return ride;
});
const getRideHistory = (riderId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ride_model_1.Ride.find({ rider: riderId }).sort({ createdAt: -1 });
});
exports.RiderService = {
    requestRide,
    cancelRide,
    getRideHistory,
};
