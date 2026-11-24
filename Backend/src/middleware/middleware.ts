import type { Request,Response,NextFunction } from "express";
import { error } from "node:console";
if(!process.env.JWT_SECRET){
    throw error("Can not access the JWT_SECRET");
}
const JWT_SECRET=process.env.JWT_SECRET;


export function middleware(req:Request,res:Response,next:NextFunction){
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}