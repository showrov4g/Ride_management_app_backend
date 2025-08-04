import mongoose from "mongoose";

const rideSchema = new mongoose.Schema({
    rider: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    pickup: { type: String, required: true },
    destination: { type: String, required: true },
    fare: { type: Number, default: 0 },
    status: { type: String, enum: ["requested", "accepted", "picked_up", "in_transit", "completed", "canceled"], default: "requested" },
    statusHistory:[{
        status: String,
        timeStamp: Date,
    }],
    createdAt: {type: Date, default: Date.now}

});

export const Ride = mongoose.model("Ride", rideSchema)