import { AxiosError } from 'axios'

export const handleAxiosError = (err: any) => {
  const error = err as AxiosError<{message:string, error:boolean}>
  if (error.response) return new Error(error.response.data.message)
  return new Error('Ha ocurrido un error, no se recibió respuesta del servidor')
}
