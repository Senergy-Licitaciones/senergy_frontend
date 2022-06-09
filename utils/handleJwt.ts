import { TokenProveedor, TokenUser } from "../types/data";
import jwt from "jsonwebtoken";
export const decode=(token:string):TokenUser=>{
    return jwt.decode(token) as TokenUser ;
}
export const verifyToken=(token:string):TokenUser|TokenProveedor=>{
    try{
        return jwt.verify(token,process.env.JWT_SECRET) as TokenProveedor|TokenUser ;
    }catch(err){
        console.log("error jwt ",err);
        return null
    }
}