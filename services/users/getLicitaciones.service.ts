import { FetcherAuth } from '@mytypes/fetch'
import { Licitacion } from '@mytypes/models'
import { AxiosResponse } from 'axios'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getLicitaciones:FetcherAuth<Array<Omit<Licitacion, 'puntoSum'|'brg'|'tipoServicio'|'createdAt'|'updatedAt'>&{createdAt:string, updatedAt:string}>> = async (token) => {
  try {
    const { data } = await senergy.get('/user/getLicitaciones', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<Array<Omit<Licitacion, 'puntoSum'|'brg'|'tipoServicio'|'createdAt'|'updatedAt'>&{createdAt:string, updatedAt:string}>>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
