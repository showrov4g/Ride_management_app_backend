export interface  IUser extends Document{
    name: string;
    email: string;
    passsword: string;
    role: 'admin' | "rider" | "driver";
    isBlocked?:boolean;
    isApproved?: boolean;
    isOnline?: boolean;
}