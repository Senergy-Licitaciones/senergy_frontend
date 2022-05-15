import { Dispatch, FormEvent, SetStateAction } from "react";
import { Estado, FormCrearLicitacionUser, HookCrearLicitacion } from "../../types/form";
import { useData } from "../hooks/useData";
import { useForm } from "../hooks/useForm";
import EspecificacionesTecnicas from "./componentsCrearLicitacion/EspecificacionesTecnicas";
import EspecificacionMes from "./componentsCrearLicitacion/EspecificacionMes";
import InfoDetallada from "./componentsCrearLicitacion/InfoDetallada";
import InfoGeneral from "./componentsCrearLicitacion/InfoGeneral";
import {HandleSubmit} from "../../types/form";
import {methodPostAuth} from "../../utils/fetch";
import {Response,ErrorResponse} from "../../types/methods";
type Props={
    step:number,
    setStep:Dispatch<SetStateAction<number>>
}

const formInit:FormCrearLicitacionUser={
    title:"",
    description:"",
    tipoLicitacion:"",
    tipoServicio:"",
    fechaInicioApertura:"",
    fechaFinApertura:"",
    numLicitacion:0,
    requisitos:"",
    estado:Estado.Cerrado,
    empresa:"",
    fechaInicio:"",
    fechaFin:"",
    puntoSum:"",
    brg:"",
    factorPlanta:0,
    meses:[]
}
export default function FormCrearLicitacion({step,setStep}:Props){
    const {form,handleChange,setForm,loading,setLoading}=useForm(formInit) as HookCrearLicitacion;
    const {servicios,brgs,puntoSums}=useData();
    
    const sendForm:HandleSubmit=async(e)=>{
        e.preventDefault();
        const data=await methodPostAuth("licitacion/crearLicitacion",localStorage.getItem("tokenLogin"),form) as Response | ErrorResponse;
        if("error" in data){
            console.log("error ",data.error," message ",data.message);
        }else{
            console.log("mensaje ",data.message);
        }
    }
    return(
        <form onSubmit={sendForm} className="flex-1 mb-4 md:m-0">
                    <InfoGeneral servicios={servicios} setStep={setStep} step={step} handleChange={handleChange} form={form} />
                    <InfoDetallada handleChange={handleChange} step={step} setStep={setStep} form={form} />
                    <EspecificacionesTecnicas step={step} setForm={setForm} setStep={setStep} form={form} handleChange={handleChange} brgs={brgs} puntoSums={puntoSums} />
                    <EspecificacionMes loading={loading} setLoading={setLoading} form={form} step={step} setForm={setForm} />
                </form>
    )
}