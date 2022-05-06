import { ChangeEvent, Dispatch, SetStateAction } from "react"

export enum Estado{
    Abierto="abierto",
    Cerrado="cerrado"
}
export type Form=FormCrearLicitacionUser | {hola:string}
export type FormCrearLicitacionUser={
    title:string,
    description:string,
    fechaInicioApertura:string,
    fechaFinApertura:string,
    tipoLicitacion:string,
    tipoServicio:string,
    numLicitacion:number,
    requisitos:string,
    estado:Estado,
    empresa:string,
    fechaInicio:string,
    fechaFin:string,
    puntoSum:string,
    brg:string,
    factorPlanta:number,
    meses:NumMes[]
}
export type HandleChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLSelectElement>)=>void
export type NumMes={mes:string,hp:number,hfp:number}
export type HookCrearLicitacion={form:FormCrearLicitacionUser,handleChange:HandleChange,setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>}
export type HookForm=(initForm:Form)=>{form:Form,handleChange:HandleChange,setForm:Dispatch<SetStateAction<Form>>}