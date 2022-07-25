import { NumMes } from '../form'
import { Estado } from '../form/enums'

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
