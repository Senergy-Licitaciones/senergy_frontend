import { Dispatch, SetStateAction } from 'react'
import { FormCrearLicitacionUser } from '../form'

export type UseMeses = (update:boolean, form:FormCrearLicitacionUser, setForm:Dispatch<SetStateAction<FormCrearLicitacionUser>>) => void
