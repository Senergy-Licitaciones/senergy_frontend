import { FactorIndex } from '../form'

export interface BloqueResponse{
    fechaInicio:string,
    fechaFin:string
}
export interface BloquePotenciaResponse extends BloqueResponse{
    potencia:number
}
export interface BloqueEnergiaResponse extends BloqueResponse{
    energia:number
}

export interface OfertaByIdResponse{
    _id:string,
    potencia:Array<BloquePotenciaResponse>,
    energiaHp:Array<BloqueEnergiaResponse>,
    energiaHfp:Array<BloqueEnergiaResponse>,
    tarifaPotencia:boolean,
    tarifaEnergiaHp:boolean,
    tarifaEnergiaHfp:boolean,
    potMinFacturable:number,
    potenciaFacturar:string,
    excesoPotencia:number,
    formulaIndexPotencia:Array<FactorIndex>,
    formulaIndexEnergia:Array<FactorIndex>,
    proveedor:string,
    licitacion:string,
    excesoEnergiaHp?:number,
    excesoEnergiaHfp?:number,
    createdAt:string,
    updatedAt:string
}
