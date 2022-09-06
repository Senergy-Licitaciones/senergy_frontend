import { yupResolver } from '@hookform/resolvers/yup'
import { BloqueEnergia, BloquePotencia, FactorIndex, FormCrearOfertaProveedor } from '@mytypes/form'
import { ErrorsForm, ValidatorForm } from '@mytypes/validators'
import { boolean, mixed, number, object, string } from 'yup'
export const crearOfertaSchema = object({
  potencia: mixed<BloquePotencia[]>().required('Declarar los bloques de potencia es requerido'),
  energiaHp: mixed<BloqueEnergia[]>().required('La oferta de energía HP es requerida'),
  tarifaPotencia: boolean().required('La tarifa de potencia es requerida'),
  tarifaEnergiaHp: boolean().required('La tarifa de energía HP es requerida'),
  tarifaEnergiaHfp: boolean().required('La tarifa de energía HFP es requerida'),
  energiaHfp: mixed<BloqueEnergia[]>().required('La oferta de energía HFP es requerida'),
  potenciaFacturar: string().required('La potencia a facturar es requerida'),
  formulaIndexPotencia: mixed<FactorIndex[]>().required('La fórmula de indexación de potencia es requerida'),
  formulaIndexEnergia: mixed<FactorIndex[]>().required('La fórmula de indexación de energía es requerida'),
  potMinFacturable: number().required('La potencia mínima facturable es requerida'),
  excesoPotencia: number().required('El exceso de potencia es requerido'),
  excesoEnergiaHp: number().optional(),
  excesoEnergiaHfp: number().optional()
})
export const crearOfertaResolver = yupResolver(crearOfertaSchema)

export const validatorCrearOferta:ValidatorForm<FormCrearOfertaProveedor, Omit<FormCrearOfertaProveedor, 'formulaIndexPotencia'|'formulaIndexEnergia'|'excesoEnergiaHp'|'excesoEnergiaHfp'|'potencia'|'energiaHp'|'energiaHfp'|'tarifaPotencia'|'tarifaEnergiaHp'|'tarifaEnergiaHfp'>> = (form) => {
  const errors:ErrorsForm<Omit<FormCrearOfertaProveedor, 'tarifaPotencia'|'tarifaEnergiaHfp'|'tarifaEnergiaHp' |'potencia'|'energiaHp'|'energiaHfp'| 'formulaIndexPotencia'|'formulaIndexEnergia'|'excesoEnergiaHp'|'excesoEnergiaHfp'>> = {
    excesoPotencia: '',
    potenciaFacturar: '',
    potMinFacturable: ''
  }
  if (!form.potenciaFacturar.trim()) errors.potenciaFacturar = 'Campo requerido'
  if (form.potMinFacturable < 0 || form.potMinFacturable > 100)errors.potMinFacturable = 'Potencia mínima facturable debe estar entre 0 - 100 %'
  if (form.excesoPotencia < 100 || form.excesoPotencia > 200) errors.excesoPotencia = 'El exceso de potencia debe estar entre 100 - 200 %'
  return errors
}
