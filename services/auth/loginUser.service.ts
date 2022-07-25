import { AxiosResponse } from 'axios'
import { createLoginAdapter } from '../../adapters'
import { FetcherBody } from '../../types/fetch'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const loginUser:FetcherBody<{correo:string, password:string}, {accessToken:string}> = async (form) => {
  try {
    const { data } = await senergy.put('/auth/loginUsuario', form) as AxiosResponse<{token:string}>
    return createLoginAdapter(data)
  } catch (err) {
    throw handleAxiosError(err)
  }
}
