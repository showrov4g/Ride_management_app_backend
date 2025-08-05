import mongoose, { Document, Schema, Types } from "mongoose";

// Ride status গুলো টাইপ হিসেবে ডিফাইন করলাম
export type RideStatus =
    | "requested"
    | "accepted"
    | "picked_up"
    | "in_transit"
    | "completed"
    | "canceled";

// StatusHistory এর ইন্টারফেস
export interface IStatusHistory {
    status: RideStatus;
    timeStamp: Date;
}

// Ride এর ইন্টারফেস (Document এক্সটেন্ড)
export interface IRide extends Document {
    rider: Types.ObjectId;
    driver?: Types.ObjectId;
    pickup: string;
    destination: string;
    fare: number;
    status: RideStatus;
    statusHistory: IStatusHistory[];
    createdAt: Date;
    updatedAt: Date;
}

const StatusHistorySchema = new Schema<IStatusHistory>({
    status: {
        type: String,
        enum: [
            "requested",
            "accepted",
            "picked_up",
            "in_transit",
            "completed",
            "canceled",
        ],
        required: true,
    },
    timeStamp: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const rideSchema = new Schema<IRide>(
    {
        rider: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        driver: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
        pickup: {
            type: String,
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        fare: {
            type: Number,
            default: 0,
        },
        status: {
            type: String,
            enum: [
                "requested",
                "accepted",
                "picked_up",
                "in_transit",
                "completed",
                "canceled",
            ],
            default: "requested",
        },
        statusHistory: {
            type: [StatusHistorySchema],
            default: [],
        },
    },
    { timestamps: true }
);

export const Ride = mongoose.model<IRide>("Ride", rideSchema);
