import { AxiosError } from 'axios'

const handleAxiosError = (err: any) => {
  const error = err as AxiosError<{message:string, error:boolean}>
  if (error.response) return new Error(error.response.data.message)
  return new Error('Ha ocurrido un error, no se recibió respuesta del servidor')
}
export default handleAxiosError
