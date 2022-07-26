import { Oferta } from '@mytypes/models'

export const createOfertaAdapter = (response:any):Oferta => {
  return {
    _id: response._id,
    energiaHfp: response.energiaHfp,
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
    excesoEnergiaHp: response.excesoEnergiaHp
  }
}
