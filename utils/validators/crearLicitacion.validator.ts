import { NumMes } from '@mytypes/form'
import { mixed, number, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Estado } from '@/types/form/enums'
export const crearLicitacionSchema = object({
  description: string().optional(),
  tipoLicitacion: string().optional(),
  requisitos: string().optional(),
  meses: mixed<NumMes[]>().required('Declarar los meses es requerido'),
  author: string().required('El responsable de la licitación es requerido'),
  brg: string().required('El BRG es requerido'),
  empresa: string().required('La empresa es requerida'),
  estado: mixed<Estado>().required('El estado de la licitación es requerido').oneOf(Object.values(Estado)),
  factorPlanta: number().required('El factor de planta es requerido').min(0, 'El factor de planta no debe ser menor a 0').max(1, 'El factor de planta no debe ser mayor a 1'),
  fechaInicio: string().required('La fecha de inicio es requerida'),
  fechaFin: string().required('La fecha de fin es requerida'),
  fechaInicioApertura: string().required('La fecha de inicio de apertura es requerida'),
  fechaFinApertura: string().required('La fecha de fin de apertura es requerida'),
  numLicitacion: number().min(10000, 'El número debe ser de 5 dígitos').max(99999, 'El número debe ser de 5 dígitos').required('El número de licitación es requerido'),
  puntoSum: string().required('El punto de suministro es requerido'),
  tipoServicio: string().required('El tipo de servicio es requerido'),
  title: string().required('El título es requerido')
})
export const crearLicitacionResolver = yupResolver(crearLicitacionSchema)
