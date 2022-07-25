import { FactorIndex } from './FactorIndex'

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
