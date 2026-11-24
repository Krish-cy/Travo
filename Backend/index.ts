import express from 'express';
import { error } from 'node:console';
const app=express();
app.use(express.json());
if(!process.env.PORT){
    throw error("Can,t access the port")
}

const PORT=process.env.PORT;






app.listen(PORT,()=>{
    console.log(`Server is running on this ${PORT} port`)
})