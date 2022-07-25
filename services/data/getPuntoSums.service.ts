import { AxiosResponse } from 'axios'
import { FetcherAuth } from '../../types/fetch'
import { ParamsUseData } from '../../types/hooks'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getPuntoSums:FetcherAuth<Array<ParamsUseData>> = async (token) => {
  try {
    const { data } = await senergy.get('/puntoSum/getPuntoSums', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<Array<ParamsUseData>>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
