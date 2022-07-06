import { FormCrearOfertaProveedor } from '../../types/form'
import { ErrorsForm, ValidatorForm } from '../../types/validators'

const validatorCrearOferta:ValidatorForm<FormCrearOfertaProveedor, Omit<FormCrearOfertaProveedor, 'formulaIndexPotencia'|'formulaIndexEnergia'|'excesoEnergiaHp'|'excesoEnergiaHfp'>> = (form) => {
  const errors:ErrorsForm<Omit<FormCrearOfertaProveedor, 'formulaIndexPotencia'|'formulaIndexEnergia'|'excesoEnergiaHp'|'excesoEnergiaHfp'>> = {
    energiaHfp: '',
    energiaHp: '',
    excesoPotencia: '',
    potencia: '',
    potenciaFacturar: '',
    potMinFacturable: ''
  }
  if (form.potencia <= 0)errors.potencia = 'La potencia debe ser mayor a 0'
  if (form.energiaHp <= 0) errors.energiaHp = 'La energía en horas punta debe ser mayor a 0'
  if (form.energiaHfp <= 0)errors.energiaHfp = 'La energía en horas fuera de punta debe ser mayor a 0'
  if (!form.potenciaFacturar.trim()) errors.potenciaFacturar = 'Campo requerido'
  if (form.potMinFacturable < 0 || form.potMinFacturable > 100)errors.potMinFacturable = 'Potencia mínima facturable debe estar entre 0 - 100 %'
  if (form.excesoPotencia < 100 || form.excesoPotencia > 200) errors.excesoPotencia = 'El exceso de potencia debe estar entre 100 - 200 %'
  return errors
}
export default validatorCrearOferta
