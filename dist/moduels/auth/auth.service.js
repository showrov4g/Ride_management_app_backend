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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_model_1 = require("../user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role } = data;
    const exitUser = yield user_model_1.User.findOne({ email });
    if (exitUser) {
        throw new Error("User already exist with this email");
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const user = yield user_model_1.User.create({
        name,
        email,
        passsword: hashedPassword,
        role,
        isApproved: role === "driver" ? false : true,
    });
    const token = jsonwebtoken_1.default.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "3d" });
    return { token, user };
});
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const user = yield user_model_1.User.findOne({ email });
    if (!user) {
        throw new Error("user not fund");
    }
    if (user.isBlocked) {
        throw new Error("User is blocked");
    }
    const isPasswordMatched = yield bcrypt_1.default.compare(password, user.passsword);
    if (!isPasswordMatched) {
        throw new Error("invalid Password");
    }
    const token = jsonwebtoken_1.default.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '3d' });
    return { token, user };
});
exports.AuthService = {
    registerUser,
    loginUser
};
