import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name:{type: String, required:true},
    email: {type: String, required: true, unique: true},
    passsword: {type: String, required: true},
    role:{type: String, enum: ["admin", "rider", "driver"], required: true},
    isBlocked: {type: Boolean, default: false},
    isApproved:{type:Boolean, default: false},
    isOnline:{type: Boolean, default: false}
})


export const User = mongoose.model<IUser>("User", userSchema)