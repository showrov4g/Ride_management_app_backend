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
exports.AdminController = void 0;
const admin_service_1 = require("./admin.service");
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield admin_service_1.AdminService.getAllUsers();
    res.status(200).json({ success: true, data: users });
});
const getAllDrivers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const drivers = yield admin_service_1.AdminService.getAllDrivers();
    res.status(200).json({ success: true, data: drivers });
});
const getAllRides = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rides = yield admin_service_1.AdminService.getAllRides();
    res.status(200).json({ success: true, data: rides });
});
const approveDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const driverId = req.params.id;
    const updated = yield admin_service_1.AdminService.updateDriverApproval(driverId, true);
    res.status(200).json({ success: true, message: 'Driver approved', data: updated });
});
const suspendDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const driverId = req.params.id;
    const updated = yield admin_service_1.AdminService.updateDriverApproval(driverId, false);
    res.status(200).json({ success: true, message: 'Driver suspended', data: updated });
});
const blockUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const updated = yield admin_service_1.AdminService.updateUserBlock(userId, true);
    res.status(200).json({ success: true, message: 'User blocked', data: updated });
});
const unblockUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const updated = yield admin_service_1.AdminService.updateUserBlock(userId, false);
    res.status(200).json({ success: true, message: 'User unblocked', data: updated });
});
exports.AdminController = {
    getAllUsers,
    getAllDrivers,
    getAllRides,
    approveDriver,
    suspendDriver,
    blockUser,
    unblockUser
};
