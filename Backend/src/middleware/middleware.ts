import type { Request,Response,NextFunction } from "express";
import { error } from "node:console";
import jwt from 'jsonwebtoken';
if(!process.env.JWT_SECRET){
    throw error("Can not access the JWT_SECRET");
}
const JWT_SECRET=process.env.JWT_SECRET;


export function middleware(req:Request,res:Response,next:NextFunction){
    const token=req.body;
    if(!token){
        return res.status(404).json({
            success:false,
            message:"Can,t access the token"
        })
    }
    try{
        const decode=jwt.verify(token,JWT_SECRET);
        if(!decode){
            return res.status(403).json({
                success:false,
                message:"Jwt token invalid"
            })
        }

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}