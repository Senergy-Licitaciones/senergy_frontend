import { FetcherBodyAuth } from '@mytypes/fetch'
import { Oferta } from '@mytypes/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getOferta:FetcherBodyAuth<string, Oferta> = async (id, token) => {
  try {
    const { data } = await senergy.get(`/oferta/ofertaById/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
