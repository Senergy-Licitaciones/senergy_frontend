import { createLicitacionesAdapter } from '@/adapters'
import { FetcherAuth } from '@mytypes/fetch'
import { Licitacion } from '@mytypes/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getLicitaciones:FetcherAuth<Licitacion[]> = async (token) => {
  try {
    const { data } = await senergy.get('/user/getLicitaciones', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return createLicitacionesAdapter(data)
  } catch (err) {
    throw handleAxiosError(err)
  }
}
