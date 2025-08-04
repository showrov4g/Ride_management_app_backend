import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"


export const authGuard = (roles: string[])=>{
    return (req: Request, res: Response, next: NextFunction)=>{
        const token =  req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(401).json({message: "Unauthorized"})
        }
          try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
                if(!roles.includes(decoded.role)){
                    return res.status(403).json({message: "Forbidden: Access denied"})

                }

                (res as any).user = decoded;
                next();


            } catch (error) {
               return res.status(401).json({message: "Invalid token"}) 
            }

    }
}