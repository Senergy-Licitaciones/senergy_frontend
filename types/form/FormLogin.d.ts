import { loginSchema } from '@/utils/validators'
import { InferType } from 'yup'

export type IFormLogin= InferType<typeof loginSchema>
