import { FetcherAuth } from '@/types/fetch'
import { senergy } from '@/utils'
import { handleAxiosError } from '@/utils/handleErrors'
import { AxiosResponse } from 'axios'

export const getNamesParametros:FetcherAuth<Array<{_id:string, name:string}>> = async (token) => {
  try {
    const { data } = await senergy.get('/historial-parametros/getNames', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<Array<{_id:string, name:string}>>
    return data
  } catch (e) {
    throw handleAxiosError(e)
  }
}
