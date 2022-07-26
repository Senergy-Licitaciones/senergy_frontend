import { FormCrearOfertaProveedor } from '@mytypes/form'
import { ErrorsForm, ValidatorForm } from '@mytypes/validators'

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
