import { OfertaByIdResponse } from '@/types/responses'
import { FetcherBodyAuth } from '@mytypes/fetch'
import { AxiosResponse } from 'axios'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getOferta:FetcherBodyAuth<string, OfertaByIdResponse> = async (id, token) => {
  try {
    const { data } = await senergy.get(`/oferta/ofertaById/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<OfertaByIdResponse>
    console.log('oferta id', data)
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
