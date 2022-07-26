import { AxiosResponse } from 'axios'
import { FetcherAuth } from '../../types/fetch'
import { Licitacion } from '../../types/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getLicitaciones:FetcherAuth<Licitacion[]> = async (token) => {
  try {
    const { data } = await senergy.get('/user/getLicitaciones', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<Licitacion[]>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
