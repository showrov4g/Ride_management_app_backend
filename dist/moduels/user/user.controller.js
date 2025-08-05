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
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const getAllUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_services_1.userService.getAllUser();
    res.status(200).json({ success: true, data: users });
});
const blockUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const result = yield user_services_1.userService.updateBLockStatus(userId, true);
    res.status(200).json({ success: true, message: " User block successfully" });
});
const unblockUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const result = yield user_services_1.userService.updateBLockStatus(userId, false);
    res.status(200).json({ success: true, message: "User unblock successfully" });
});
exports.UserController = {
    getAllUser,
    blockUser,
    unblockUser
};
