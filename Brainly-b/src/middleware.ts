import type { Request, Response, NextFunction } from "express";
import { JWT_PASSWORD } from "./config.js";
import  jwt, { type JwtPayload }  from "jsonwebtoken";

export const userMiddlware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
 

  if (!authHeader) {
    return res.status(401).json({
      message: "Authorization header missing",
    });
  }
  

  
  const parts = authHeader.split(" ");
   if (parts.length !== 2) return;
   const token = parts[1] as string; // string
   
  try {
   
   const decoded = jwt.verify(token, JWT_PASSWORD) as JwtPayload;

    // @ts-ignore
    req.userId = decoded.id;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "Invalid or expired token",
    });
  }
};
