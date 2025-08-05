"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const authGuard_1 = require("../../middlewares/authGuard");
const router = express_1.default.Router();
router.get('/users', (0, authGuard_1.authGuard)(['admin']), admin_controller_1.AdminController.getAllUsers);
router.get('/drivers', (0, authGuard_1.authGuard)(['admin']), admin_controller_1.AdminController.getAllDrivers);
router.get('/rides', (0, authGuard_1.authGuard)(['admin']), admin_controller_1.AdminController.getAllRides);
router.patch('/driver/approve/:id', (0, authGuard_1.authGuard)(['admin']), admin_controller_1.AdminController.approveDriver);
router.patch('/driver/suspend/:id', (0, authGuard_1.authGuard)(['admin']), admin_controller_1.AdminController.suspendDriver);
router.patch('/user/block/:id', (0, authGuard_1.authGuard)(['admin']), admin_controller_1.AdminController.blockUser);
router.patch('/user/unblock/:id', (0, authGuard_1.authGuard)(['admin']), admin_controller_1.AdminController.unblockUser);
exports.adminRoutes = router;
