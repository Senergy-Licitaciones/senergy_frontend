import { AxiosResponse } from 'axios'
import { FetcherAuth } from '../../types/fetch'
import { Oferta } from '../../types/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getOfertas:FetcherAuth<Oferta[]> = async (token) => {
  try {
    const { data } = await senergy.get('/oferta/showOfertas', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<Oferta[]>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
