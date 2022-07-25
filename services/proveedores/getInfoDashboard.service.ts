import { AxiosResponse } from 'axios'
import { createInfoDashboardAdapter } from '../../adapters'
import { FetcherAuth } from '../../types/fetch'
import { InfoDashboardProveedor } from '../../types/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getInfoDashboard :FetcherAuth<InfoDashboardProveedor> = async (token) => {
  try {
    const { data } = await senergy.get('/proveedor/infoDashboardProveedor', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<InfoDashboardProveedor>
    return createInfoDashboardAdapter(data)
  } catch (err) {
    throw handleAxiosError(err)
  }
}
