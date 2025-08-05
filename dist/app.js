"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_route_1 = require("./moduels/auth/auth.route");
const user_route_1 = require("./moduels/user/user.route");
const rider_route_1 = require("./moduels/ride/rider.route");
const driver_route_1 = require("./moduels/driver/driver.route");
const admin_route_1 = require("./moduels/admin/admin.route");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// routes 
app.use('/api/v1/auth', auth_route_1.authRoutes);
app.use("/api/v1/users", user_route_1.userRoutes);
app.use('/api/v1/rides', rider_route_1.riderRoutes);
app.use('/api/v1/driver', driver_route_1.driverRoutes);
app.use('/api/v1/admin', admin_route_1.adminRoutes);
app.get('/', (req, res) => {
    res.send("Ride Booking API is Running");
});
exports.default = app;
