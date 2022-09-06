import { AxiosResponse } from 'axios'
import { FetcherBodyAuth } from '@mytypes/fetch'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'
import { IFormCrearLicitacionUser } from '@/types/form'

export const updateLicitacion:FetcherBodyAuth<{form:IFormCrearLicitacionUser, id:string}, {message:string}> = async ({ form, id }, token) => {
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
