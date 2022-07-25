import { convertToDate } from '..'
import { REGEX_FORM } from '../../consts/regex'
import { FormCrearLicitacionUser } from '../../types/form'
import { ErrorsForm, ValidatorForm } from '../../types/validators'

const validatorCrearLicitacion:ValidatorForm<FormCrearLicitacionUser, Omit<FormCrearLicitacionUser, 'tipoLicitacion'| 'meses'|'description'|'requisitos'>> = (form) => {
  const errors:ErrorsForm<Omit<FormCrearLicitacionUser, 'tipoLicitacion'| 'meses'|'description'|'requisitos'>> = {
    author: '',
    brg: '',
    empresa: '',
    estado: '',
    factorPlanta: '',
    fechaInicio: '',
    fechaFin: '',
    fechaInicioApertura: '',
    fechaFinApertura: '',
    numLicitacion: '',
    puntoSum: '',
    tipoServicio: '',
    title: ''
  }
  if (!form.title.trim()) errors.title = 'Campo requerido'
  if (!form.author.trim()) {
    errors.author = 'Campo requerido'
  } else if (!REGEX_FORM.NAMES.test(form.author.trim())) errors.author = 'Nombre inválido'
  if (!form.brg.trim()) errors.brg = 'Campo requerido'
  if (!form.empresa.trim()) errors.empresa = 'Campo requerido'
  if (!form.estado.trim()) errors.estado = 'Campo requerido'
  if (form.factorPlanta <= 0 || form.factorPlanta >= 1) errors.factorPlanta = 'Debe estar entre 0 y 1'
  if (!form.fechaInicioApertura.trim()) {
    errors.fechaInicioApertura = 'Campo requerido'
  } else if (convertToDate(form.fechaInicioApertura) < new Date())errors.fechaInicioApertura = 'Fecha inválida'
  if (!form.fechaFinApertura.trim()) {
    errors.fechaFinApertura = 'Campo requerido'
  } else if (form.fechaInicioApertura && convertToDate(form.fechaFinApertura) < convertToDate(form.fechaInicioApertura)) errors.fechaFinApertura = 'La fecha final de apertura debe ser después al inicio de apertura'
  if (!form.fechaInicio.trim()) {
    errors.fechaInicio = 'Campo requerido'
  } else if (form.fechaFinApertura && convertToDate(form.fechaInicio) < convertToDate(form.fechaFinApertura)) errors.fechaInicio = 'La fecha de inicio debe ser después del final de la apertura'
  if (!form.fechaFin.trim()) {
    errors.fechaFin = 'Campo requerido'
  } else if (form.fechaInicio && convertToDate(form.fechaFin) < convertToDate(form.fechaInicio)) errors.fechaFin = 'La fecha final debe ser después de la de inicio'
  if (form.numLicitacion === 0) {
    errors.numLicitacion = 'Campo requerido'
  } else if (form.numLicitacion > 99999 || form.numLicitacion < 10000)errors.numLicitacion = 'El número de licitación debe ser de 5 dígitos'
  if (!form.puntoSum.trim()) errors.puntoSum = 'Campo requerido'
  if (!form.tipoServicio.trim()) errors.tipoServicio = 'Campo requerido'
  return errors
}
export default validatorCrearLicitacion
