import { Response } from '../methods'

export interface Info{
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
