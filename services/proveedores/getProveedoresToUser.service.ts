import { AxiosResponse } from 'axios'
import { FetcherAuth } from '@mytypes/fetch'
import { InfoBasicaProveedor } from '@mytypes/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getProveedoresToUser:FetcherAuth<InfoBasicaProveedor[]> = async (token) => {
  try {
    const { data } = await senergy.get('/proveedor/getProveedoresToUser', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<InfoBasicaProveedor[]>
    return data
  } catch (err) {
    throw handleAxiosError(err)
  }
}
