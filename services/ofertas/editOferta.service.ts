import { AxiosResponse } from 'axios'
import { FetcherBodyAuth } from '@mytypes/fetch'
import { FormCrearOfertaProveedor } from '@mytypes/form'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const editOferta:FetcherBodyAuth<{form:FormCrearOfertaProveedor, id:string}, {message:string}> = async ({ form, id }, token) => {
  try {
    const { data } = await senergy.put(`/oferta/editOferta/${id}`, form, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
