import { AxiosResponse } from 'axios'
import { createInfoUserDashboardAdapter } from '../../adapters'
import { FetcherAuth } from '../../types/fetch'
import { Info } from '../../types/models'
import { senergy } from '../../utils'
import { handleAxiosError } from '../../utils/handleErrors'

export const getInfoDashboard:FetcherAuth<Info> = async (token) => {
  try {
    const { data } = await senergy.get('/user/getInfoDashboard', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }) as AxiosResponse<Info>
    return createInfoUserDashboardAdapter(data)
  } catch (err) {
    throw handleAxiosError(err)
  }
}
