import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
export const loginSchema = object({
  correo: string().email('Email inválido').required('Email es requerido'),
  password: string().required('La contraseña es requerida').min(8, 'La contraseña debe tener al menos 8 caracteres').max(16, 'La contraseña debe tener máximo 16 caracteres')
})
export const loginResolver = yupResolver(loginSchema)
