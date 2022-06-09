import { useEffect, useState } from "react"
import { HookData, HookParamsData } from "../../types/form";
import { methodGetAuth } from "../../utils/fetch";

export const useData:HookData=()=>{
    const [data,setData]=useState<HookParamsData>({
        brgs:[],
        puntoSums:[],
        servicios:[]
    });
    useEffect(()=>{
        const runPromises=async()=>{
            const [brgs,puntoSums,servicios]=await Promise.all([methodGetAuth("brg/getBrgs",localStorage.getItem("tokenLogin") as string),
            methodGetAuth("puntoSum/getPuntoSums",localStorage.getItem("tokenLogin") as string),
            methodGetAuth("servicio/getServicios",localStorage.getItem("tokenLogin") as string)]);
            setData({
                brgs,
                puntoSums,
                servicios
            })
        };
        runPromises();
    },[]);
    return{
        brgs:data.brgs,
        puntoSums:data.puntoSums,
        servicios:data.servicios
    }
}