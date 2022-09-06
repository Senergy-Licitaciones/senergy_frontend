import { UseFormSetValue } from 'react-hook-form'
import { IFormCrearLicitacionUser } from '../form'

export type UseMeses = (update:boolean, form:IFormCrearLicitacionUser, setValue:UseFormSetValue<IFormCrearLicitacionUser>) => void
