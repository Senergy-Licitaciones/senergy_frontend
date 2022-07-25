import { createOfertaAdapter } from '../../adapters'
import { FetcherBodyAuth } from '../../types/fetch'
import { Oferta } from '../../types/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getOferta:FetcherBodyAuth<string, Oferta> = async (id, token) => {
  try {
    const { data } = await senergy.get(`/oferta/ofertaById/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return createOfertaAdapter(data)
  } catch (err) {
    throw handleAxiosError(err)
  }
}
