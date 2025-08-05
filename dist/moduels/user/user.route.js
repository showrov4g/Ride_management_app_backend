"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const authGuard_1 = require("../../middlewares/authGuard");
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get("/all", (0, authGuard_1.authGuard)(["admin"]), user_controller_1.UserController.getAllUser);
router.patch("/block/:id", (0, authGuard_1.authGuard)(["admin"]), user_controller_1.UserController.blockUser);
router.patch("/unblock/:id", (0, authGuard_1.authGuard)(['admin']), user_controller_1.UserController.unblockUser);
exports.userRoutes = router;
