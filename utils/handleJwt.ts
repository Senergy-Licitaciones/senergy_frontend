import jwt from "jsonwebtoken";
import { TokenUser } from "../types/data";
export const decode=(token:string):TokenUser=>{
    return jwt.decode(token);
}