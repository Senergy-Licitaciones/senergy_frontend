import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react"

export enum Estado{
    Abierto="abierto",
    Cerrado="cerrado"
}
export type FactorIndex={
    factor:number,
    index:string
}
export type Form=FormCrearLicitacionUser | FormCrearOfertaProveedor
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
export type FormCrearOfertaProveedor={
    potencia:number,
    energiaHp:number,
    energiaHfp:number,
    potenciaFacturar:string,
    formulaIndex:FactorIndex[],
    potMinFacturable:number,
    excesoPotencia:number
}

export type HandleChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLSelectElement>)=>void
export type HandleSubmit=(e:FormEvent<HTMLFormElement>)=>void
export type NumMes={mes:string,hp:number,hfp:number}
export type HookCrearLicitacion={form:FormCrearLicitacionUser,handleChange:HandleChange,setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>}
export type HookCrearOferta={form:FormCrearOfertaProveedor,handleChange:HandleChange,setForm:Dispatch<SetStateAction<FormCrearOfertaProveedor>>}
export type HookForm=(initForm:Form)=>{form:Form,handleChange:HandleChange,setForm:Dispatch<SetStateAction<Form>>}