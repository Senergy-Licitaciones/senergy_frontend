/* eslint-disable no-use-before-define */
import { Session } from 'next-auth'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'
import { DataSelect } from '../data'
import { ErrorsForm, ValidatorForm } from '../validators'
import { Estado } from './enums'

export type FactorIndex={
    factor:number,
    index:string
}
export type Form=FormCrearLicitacionUser|FormLogin|FormConfirmProveedor|FormConfirmAccount | FormCrearOfertaProveedor|FormRegisterProveedor | FormRegisterUser | FormConfirmAccount
export type FormConfirmAccount={
    code:string,
    idUser:string
}
export type FormConfirmProveedor={
    code:string,
    correo:string
}
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
    author:string,
    factorPlanta:number,
    meses:NumMes[]
}
interface Bloque{
    fechaInicio:Date,
    fechaFin:Date
}
export interface BloqueEnergia extends Bloque{
    energia:number
}
export interface BloquePotencia extends Bloque{
    potencia:number
}
export type FormCrearOfertaProveedor={
    potencia:Array<BloquePotencia>,
    energiaHp:Array<BloqueEnergia>,
    tarifaPotencia:boolean,
    tarifaEnergiaHp:boolean,
    tarifaEnergiaHfp:boolean,
    energiaHfp:Array<BloqueEnergia>,
    potenciaFacturar:string,
    formulaIndexPotencia:FactorIndex[],
    formulaIndexEnergia:FactorIndex[],
    potMinFacturable:number,
    excesoPotencia:number,
    excesoEnergiaHp?:number,
    excesoEnergiaHfp?:number
}
export type FormLogin={
    correo:string,
    password:string
}
export type FormRegisterProveedor={
    correo:string,
    password:string,
    razSocial:string,
    ruc:number,
    address:string,
    phone:number,
    web?:string,
    pais:string,
    terms:boolean
}
export type FormRegisterUser={
    correo:string,
    password:string,
    empresa:string,
    ruc:number,
    address:string,
    web?:string,
    phone:number,
    terms:boolean
}

export type HandleChange=(e:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>|ChangeEvent<HTMLSelectElement>)=>void
export type HandleSubmit=(e:FormEvent<HTMLFormElement>)=>void
export type HookConfirmAccount={form:FormConfirmAccount, handleChange:HandleChange, setForm:Dispatch<SetStateAction<FormConfirmAccount>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>}
export type HookConfirmProveedor={form:FormConfirmProveedor, handleChange:HandleChange, setForm:Dispatch<SetStateAction<FormConfirmProveedor>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>}
export type HookCrearLicitacion={form:FormCrearLicitacionUser, handleChange:HandleChange, setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>}
export type HookCrearOferta={form:FormCrearOfertaProveedor, handleChange:HandleChange, setForm:Dispatch<SetStateAction<FormCrearOfertaProveedor>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>}
export type HookData=(session:Session|null)=>{brgs:DataSelect[], puntoSums:DataSelect[], servicios:DataSelect[]}
export type HookForm= <ParamForm, ValidationForm>(initForm:ParamForm, validator:ValidatorForm<ValidationForm>)=>{form:ParamForm, handleChange:HandleChange, setForm:Dispatch<SetStateAction<ParamForm>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>, error:ErrorsForm<ValidationForm>, setError:Dispatch<SetStateAction<ErrorsForm<ValidationForm>>>}
export type HookLogin={form:FormLogin, handleChange:HandleChange, setForm:Dispatch<SetStateAction<FormLogin>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>, error:boolean, setError:Dispatch<SetStateAction<boolean>>};
export type HookParamsData={brgs:DataSelect[], puntoSums:DataSelect[], servicios:DataSelect[]}
export type HookRegistrarUsuario={form:FormRegisterUser, handleChange:HandleChange, setForm:Dispatch<SetStateAction<FormRegisterUser>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>}
export type HookRegistrarProveedor={form:FormRegisterProveedor, handleChange:HandleChange, setForm:Dispatch<SetStateAction<FormRegisterProveedor>>, loading:boolean, setLoading:Dispatch<SetStateAction<boolean>>}
export type NumMes={mes:string, hp:number, hfp:number}
