import { TokenUser } from "../types/data";
const jwt=require("jsonwebtoken");
export const decode=(token:string):TokenUser=>{
    return jwt.decode(token);
}
export const verifyToken=async(token:string)=>{
    try{
        console.log("jwt ",process.env.JWT_SECRET);
        return jwt.verify(token,process.env.JWT_SECRET);
    }catch(err){
        console.log("error jwt ",err);
        return null
    }
}