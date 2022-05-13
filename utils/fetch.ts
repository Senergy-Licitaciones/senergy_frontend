import axios from "axios";
import {API} from "../consts/config";
import { ResponseMethod, ResponseMethodPut } from "../types/methods";

export const methodGetAuth=async(url:string,token:string)=>{
    try{
        const {data}=await axios.get(`${API}/${url}`,{headers:{
            "Authorization":`Bearer ${token}`
        }});
        return data;
    }catch(err){
        return{
            message:"Ha ocurrido un error al realizar la petición",
            error:err
        }
    }
}
export const methodPostAuth=async(url:string,token:string,body:Object)=>{
    try{
        const {data}=await axios.post(`${API}/${url}`,body,{headers:{
            "Authorization":`Bearer ${token}`
        }});
        return data;
    }catch(err){
        return{
            message:"Ha ocurrido un error al realizar la petición",
            error:err
        }
    }
}
export const methodPutAuth=async(url:string,token:string,body:Object)=>{
    try{
        const {data}=await axios.put(`${API}/${url}`,body,{headers:{
            "Authorization":`Bearer ${token}`
        }});
        return data;
    }catch(err){
        return{
            message:"Ha ocurrido un error al realizar la petición",
            error:err
        }
    }
}
export const methodPost=async(url:string,body:Object):Promise<ResponseMethod>=>{
    try{
        const {data}=await axios.post(`${API}/${url}`,body);
        return data;
    }catch(err){
        return{
            message:"Ha ocurrido un error al realizar la petición",
            error:err
        }
    }
}
export const methodPut=async(url:string,body:Object):Promise<ResponseMethodPut>=>{
    try{
        const {data}=await axios.put(`${API}/${url}`,body);
        return data;
    }catch(err){
        return{
            message:"Ha ocurrido un error al realizar la petición",
            error:err
        }
    }
}