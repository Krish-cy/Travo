import express from 'express';
import { auth_validation } from '../validation/auth_validation';
const route=express.Router();

route.post("/signup",async(req,res)=>{
    const main=auth_validation.safeParse(req.body);
    if(main.success){
        return res.status(403).json({
            success:false,
            message:"Please enter the correct inputs"
        })
    }
    try{
        

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})

route.post("/signin",async(req,res)=>{
    const main=auth_validation.safeParse(req.body);
    if(main.success){
        return res.status(403).json({
            success:false,
            message:"Please enter the correct inputs"
        })
    }
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
})