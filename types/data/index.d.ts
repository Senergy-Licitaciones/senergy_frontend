import { Estado, FormCrearOfertaProveedor, NumMes } from '../form'
import { Response } from '../methods'
import { Role, TypeToken } from './enums'

export type DataSelect={
    _id:string,
    name:string,
    createdAt:Date,
    updatedAt:Date
}
export type Info={
    numLicitaciones:number,
    numParticipantes:number,
    lastProvider:string,
    empresa:string,
    address:string,
    phone:number,
    correo:string,
    lastLicitacion:{
        _id:string,
        ruc:number,
        participantes:number
        fechaInicioapertura:string,
        fechaFinApertura:string
    }|Response
}
export type Licitacion={
    _id:string,
    title:string,
    description:string,
    fechaInicioApertura:string,
    fechaFinApertura:string,
    tipoServicio:{
        _id:string,
        name:string
    },
    numLicitacion:number,
    requisitos:string,
    estado:Estado,
    empresa:string,
    fechaInicio:string,
    fechaFin:string,
    puntoSum:{
        _id:string,
        name:string
    },
    brg:{
        _id:string,
        name:string
    },
    factorPlanta:number,
    meses:NumMes[],
    usuario:string,
    participantes:string[],
    author:string,
    createdAt:Date,
    updatedAt:Date
}
export interface Oferta extends FormCrearOfertaProveedor{
    _id:string,
    proveedor:string,
    licitacion:Partial<Licitacion>
}
export interface InfoBasicaProveedor{
    _id:string,
    razSocial:string,
    ruc:string,
    web:string,
    correo:string,
    address:string,
    phone:number,
    createdAt:Date,
    updatedAt:Date
}
export interface InfoDashboardProveedor{
    numOfertas:number,
    numLicitaciones:number
    plan:Role
    timeToExpireLic:string,
    ofertas:Array<{fechaInicio:string, fechaFin:string, empresa:string, participantes:number}>,
    licitaciones:Array<{fechaInicioApertura:string, fechaFinApertura:string, empresa:string, participantes:number}>
}
export interface TokenData{
    _id:string
}
export interface TokenUser extends TokenData{
    type:TypeToken.User,
    empresa:string
    role:Role
}
export interface TokenProveedor extends TokenData{
    type:TypeToken.Proveedor,
    razSocial:string
}
