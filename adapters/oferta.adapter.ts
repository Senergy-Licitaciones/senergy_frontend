import { OfertaByIdResponse } from '@/types/responses'
import { Oferta, OfertaById } from '@mytypes/models'

export const createOfertaAdapter = (response:any):Oferta => {
  return {
    _id: response._id,
    energiaHfp: response.energiaHfp0,
    energiaHp: response.energiaHp,
    excesoPotencia: response.excesoPotencia,
    formulaIndexEnergia: response.formulaIndexEnergia,
    formulaIndexPotencia: response.formulaIndexPotencia,
    licitacion: response.licitacion,
    potencia: response.potencia,
    potenciaFacturar: response.potenciaFacturar,
    potMinFacturable: response.potMinFacturable,
    proveedor: response.proveedor,
    tarifaEnergiaHfp: response.tarifaEnergiaHfp,
    tarifaEnergiaHp: response.tarifaEnergiaHp,
    tarifaPotencia: response.tarifaPotencia,
    excesoEnergiaHfp: response.excesoEnergiaHfp,
    excesoEnergiaHp: response.excesoEnergiaHp,
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt)
  }
}
export const createOfertaByIdAdapter = (response:OfertaByIdResponse):OfertaById => {
  return {
    _id: response._id,
    energiaHfp: response.energiaHfp.map(bloque => ({
      fechaInicio: new Date(bloque.fechaInicio),
      fechaFin: new Date(bloque.fechaFin),
      energia: bloque.energia
    })),
    energiaHp: response.energiaHp.map(bloque => ({
      fechaInicio: new Date(bloque.fechaInicio),
      fechaFin: new Date(bloque.fechaFin),
      energia: bloque.energia
    })),
    excesoPotencia: response.excesoPotencia,
    formulaIndexEnergia: response.formulaIndexEnergia,
    formulaIndexPotencia: response.formulaIndexPotencia,
    licitacion: response.licitacion,
    potencia: response.potencia.map(bloque => ({
      fechaInicio: new Date(bloque.fechaInicio),
      fechaFin: new Date(bloque.fechaFin),
      potencia: bloque.potencia
    })),
    potenciaFacturar: response.potenciaFacturar,
    potMinFacturable: response.potMinFacturable,
    proveedor: response.proveedor,
    tarifaEnergiaHfp: response.tarifaEnergiaHfp,
    tarifaEnergiaHp: response.tarifaEnergiaHp,
    tarifaPotencia: response.tarifaPotencia,
    excesoEnergiaHfp: response.excesoEnergiaHfp,
    excesoEnergiaHp: response.excesoEnergiaHp,
    createdAt: new Date(response.createdAt),
    updatedAt: new Date(response.updatedAt)
  }
}
