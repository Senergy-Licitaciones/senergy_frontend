import { AxiosResponse } from 'axios'
import { FetcherAuth } from '../../types/fetch'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const logoutProveedor:FetcherAuth<{message:string}> = async (token) => {
  try {
    const { data } = await senergy.put('/auth/logoutProveedor', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<{message:string}>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
