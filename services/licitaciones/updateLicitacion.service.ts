import { AxiosResponse } from 'axios'
import { FetcherBodyAuth } from '@mytypes/fetch'
import { FormCrearLicitacionUser } from '@mytypes/form'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const updateLicitacion:FetcherBodyAuth<{form:FormCrearLicitacionUser, id:string}, {message:string}> = async ({ form, id }, token) => {
  try {
    const { data } = await senergy.put(`/licitacion/actualizarLicitacion/${id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
