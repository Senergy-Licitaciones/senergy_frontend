import { Role } from './enums'

export interface InfoDashboardProveedor{
    numOfertas:number,
    numLicitaciones:number
    plan:Role
    timeToExpireLic:string,
    ofertas:Array<{fechaInicio:string, fechaFin:string, empresa:string, participantes:number}>,
    licitaciones:Array<{fechaInicioApertura:string, fechaFinApertura:string, empresa:string, participantes:number}>
}
