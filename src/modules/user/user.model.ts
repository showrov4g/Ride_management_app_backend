import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";



const userSchema = new Schema<IUser>({
    name: {type: String, required:true},
    email: {type:String, required:true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['admin', 'rider', 'driver'], default: "rider"},
    isBlocked: {type: Boolean, default: false},
    isApproved:{type: Boolean, default: false},
    isOnline: {type: Boolean, default: false},
    vehicleInfo:{type: String}
})


export const User = model<IUser>("User", userSchema);