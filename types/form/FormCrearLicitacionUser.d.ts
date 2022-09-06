import { crearLicitacionSchema } from '@/utils/validators'
import { InferType } from 'yup'
import { NumMes } from '.'
import { Estado } from './enums'

export interface FormCrearLicitacionUser{
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
export type IFormCrearLicitacionUser=InferType<typeof crearLicitacionSchema>
