// export type UserRole = 'admin' | 'rider' | 'driver',

export enum UserRole{
    admin = "admin",
    rider = "rider",
    driver = "driver"
}
export interface IUser {
  _id?: string
  name: string
  email: string
  password: string
  role: UserRole
}