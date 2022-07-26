import { createLicitacionByIdAdapter } from '../../adapters'
import { FetcherBodyAuth } from '@mytypes/fetch'
import { Licitacion } from '@mytypes/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getLicitacion:FetcherBodyAuth<string, Omit<Licitacion, 'usuario'|'participantes'>> = async (id, token) => {
  try {
    const { data } = await senergy.get(`/licitacion/licitacionId/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return createLicitacionByIdAdapter(data)
  } catch (err) {
    throw handleAxiosError(err)
  }
}
