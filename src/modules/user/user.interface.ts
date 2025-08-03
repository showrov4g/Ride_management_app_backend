export enum UserRole{
    admin = "admin",
    rider = "rider",
    driver = "driver"
}


export interface IUser{
    _id?: string,
    name: string,
    email: string,
    password: string,
    role: UserRole,
    isBlocked?: boolean,
    isApproved?: boolean,
    isOnline?: boolean,
    vehicleInfo?: string
}