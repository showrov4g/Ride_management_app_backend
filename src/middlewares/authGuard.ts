import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface DecodedUser {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: DecodedUser;
    }
  }
}

export const authGuard = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedUser;

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden: Access denied" });
      }

      req.user = decoded; 
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};
