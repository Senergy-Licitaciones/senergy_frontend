import { useEffect, useState } from "react"
import { HookData, HookParamsData } from "../../types/form";
import { methodGetAuth } from "../../utils/fetch";
import { decode } from "../../utils/handleJwt";

export const useData:HookData=()=>{
    const [data,setData]=useState<HookParamsData>({
        brgs:[],
        puntoSums:[],
        servicios:[]
    });
    useEffect(()=>{
        const runPromises=async()=>{
            const [brgs,puntoSums,servicios]=await Promise.all([methodGetAuth("brg/getBrgs",localStorage.getItem("tokenLogin")),
            methodGetAuth("puntoSum/getPuntoSums",localStorage.getItem("tokenLogin")),
            methodGetAuth("servicio/getServicios",localStorage.getItem("tokenLogin"))]);
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